/**
 * Record a short webm of each solution and convert to GIF for README embedding.
 *
 * Usage:
 *   node record.js <slug> <url>
 *   node record.js --all                 # runs every entry in solutions.json
 *
 * Output:
 *   gallery/<slug>.gif        (the final inline-friendly GIF)
 *   gallery/webm/<slug>.webm  (kept for debugging)
 */

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const { execFileSync } = require('child_process');

const GALLERY_ROOT = path.resolve(__dirname, '..');
const WEBM_DIR = path.join(GALLERY_ROOT, 'webm');
fs.mkdirSync(WEBM_DIR, { recursive: true });

const VIDEO_WIDTH = 1200;
const VIDEO_HEIGHT = 750;
const RECORD_SECONDS = 5;
const GIF_FPS = 8;
const GIF_WIDTH = 640;

async function record({ slug, url, scroll = true }) {
  const webmPath = path.join(WEBM_DIR, `${slug}.webm`);
  const gifPath = path.join(GALLERY_ROOT, `${slug}.gif`);

  console.log(`\n▶ ${slug}  ${url}`);

  const browser = await chromium.launch({
    headless: true,
    // macOS DNS cache hiccup: the custom-domain CNAME resolves via `dig` but
    // fails via the browser's getaddrinfo. Pin GitHub Pages IPs directly for
    // hosts that hit the issue. Do NOT include hosts with custom TLS certs
    // (meet.sameerai.com serves its own cert; pinning the IP makes Chromium
    // reject the wildcard *.github.io cert for the wrong SAN).
    args: [
      '--host-resolver-rules=' +
        'MAP solutions-portfolio.sameerai.com 185.199.108.153,' +
        'MAP sameer-goel.github.io 185.199.108.153',
    ],
  });
  const context = await browser.newContext({
    viewport: { width: VIDEO_WIDTH, height: VIDEO_HEIGHT },
    recordVideo: {
      dir: WEBM_DIR,
      size: { width: VIDEO_WIDTH, height: VIDEO_HEIGHT },
    },
  });
  const page = await context.newPage();

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1500); // let fonts/first paint settle

    if (scroll) {
      // Gentle scroll down to show more of the page content
      await page.evaluate(async () => {
        const steps = 6;
        const step = Math.max(60, Math.floor(document.body.scrollHeight / (steps + 2)));
        for (let i = 0; i < steps; i++) {
          window.scrollBy({ top: step, behavior: 'smooth' });
          await new Promise(r => setTimeout(r, 400));
        }
      });
    } else {
      await page.waitForTimeout(RECORD_SECONDS * 1000);
    }
  } catch (err) {
    console.error(`  ⚠ ${slug} failed during navigation:`, err.message);
  }

  await page.close();
  await context.close();
  await browser.close();

  // Find the recorded file Playwright just wrote (it names it randomly)
  const files = fs.readdirSync(WEBM_DIR).filter(f => f.endsWith('.webm'));
  // The most recent unrenamed webm is ours
  const candidates = files
    .map(f => ({ f, t: fs.statSync(path.join(WEBM_DIR, f)).mtimeMs }))
    .sort((a, b) => b.t - a.t);
  const latest = candidates[0]?.f;
  if (!latest) {
    console.error(`  ⚠ no webm found for ${slug}`);
    return;
  }
  const latestPath = path.join(WEBM_DIR, latest);
  if (latestPath !== webmPath) {
    fs.renameSync(latestPath, webmPath);
  }
  const webmSize = fs.statSync(webmPath).size;
  console.log(`  webm: ${(webmSize / 1024).toFixed(0)} KB`);

  // Convert webm -> optimized GIF via ffmpeg palette trick
  const palettePath = path.join(WEBM_DIR, `${slug}.palette.png`);
  const vfPalette = `fps=${GIF_FPS},scale=${GIF_WIDTH}:-1:flags=lanczos,palettegen=stats_mode=diff`;
  const vfFinal = `fps=${GIF_FPS},scale=${GIF_WIDTH}:-1:flags=lanczos [x]; [x][1:v] paletteuse=dither=sierra2_4a:diff_mode=rectangle`;

  execFileSync('ffmpeg', [
    '-y', '-i', webmPath,
    '-vf', vfPalette,
    palettePath,
  ], { stdio: 'pipe' });

  execFileSync('ffmpeg', [
    '-y', '-i', webmPath, '-i', palettePath,
    '-lavfi', vfFinal,
    gifPath,
  ], { stdio: 'pipe' });

  fs.unlinkSync(palettePath);

  const gifSize = fs.statSync(gifPath).size;
  console.log(`  gif:  ${(gifSize / 1024).toFixed(0)} KB -> ${gifPath}`);
}

async function main() {
  const args = process.argv.slice(2);
  if (args[0] === '--all') {
    const list = JSON.parse(fs.readFileSync(path.join(__dirname, 'solutions.json'), 'utf8'));
    for (const entry of list) {
      try {
        await record(entry);
      } catch (err) {
        console.error(`  ✖ ${entry.slug} failed:`, err.message);
      }
    }
    return;
  }
  if (args.length < 2) {
    console.error('Usage: node record.js <slug> <url>   OR   node record.js --all');
    process.exit(1);
  }
  await record({ slug: args[0], url: args[1], scroll: true });
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
