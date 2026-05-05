# Gallery

Animated preview GIFs of every solution, rendered in [`../SOLUTIONS.md`](../SOLUTIONS.md#-gallery).

Each file is a ~5-second, 640px-wide, 8fps GIF showing the solution landing page with a gentle scroll. Average size 1.5 MB per file.

## How they were recorded

[`tools/record.js`](tools/record.js) drives a headless Chromium via Playwright, records a webm, then converts to a palette-optimized GIF using ffmpeg.

```bash
cd tools
npm install
npx playwright install chromium

# Record a single solution:
node record.js <slug> <url>

# Record every solution listed in tools/solutions.json:
node record.js --all
```

GIFs land in this directory. Intermediate webm files go to `webm/` (git-ignored).

## Re-recording

Update [`tools/solutions.json`](tools/solutions.json) to add or change a URL, then run the script again for that slug.
