// MeditationApp — app.js
// Agent 1: all logic (breathing timer, session tracker, ambient audio)
// No dependencies, vanilla JS, Web Audio API only

(function () {
  'use strict';

  // ── State ──────────────────────────────────────────────────────────────────
  let sessionActive = false;
  let sessionStart = null;
  let currentSound = null;
  let audioCtx = null;
  let soundNodes = [];
  let breathInterval = null;
  let timerInterval = null;
  let currentPhaseIndex = 0;

  const PHASE_DEFAULTS = [
    { name: 'Inhale',   scale: 1.8 },
    { name: 'Hold In',  scale: 1.8 },
    { name: 'Exhale',   scale: 1.0 },
    { name: 'Hold Out', scale: 1.0 },
  ];

  // Durations controlled by knobs (seconds), 0 = skip phase
  const phaseDurations = [4, 4, 6, 0];

  function getActivePhases() {
    return PHASE_DEFAULTS
      .map((p, i) => ({ ...p, duration: phaseDurations[i], index: i }))
      .filter(p => p.duration > 0);
  }

  // ── DOM refs (set after DOMContentLoaded) ─────────────────────────────────
  let $circle, $timer, $phase, $startBtn, $sessionList, $themeBtn;

  // ── Breathing Engine ──────────────────────────────────────────────────────
  function runPhase(phaseIndex) {
    if (!sessionActive) return;
    const activePhases = getActivePhases();
    if (!activePhases.length) { stopSession(); return; }
    currentPhaseIndex = phaseIndex % activePhases.length;
    const phase = activePhases[currentPhaseIndex];

    $phase.textContent = phase.name;
    $circle.style.transition = `transform ${phase.duration}s ease-in-out`;
    $circle.style.transform = `scale(${phase.scale})`;

    let remaining = phase.duration;
    $timer.textContent = remaining;

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      remaining--;
      $timer.textContent = remaining > 0 ? remaining : '';
      if (remaining <= 0) {
        clearInterval(timerInterval);
        runPhase(currentPhaseIndex + 1);
      }
    }, 1000);
  }

  // ── Session Control ────────────────────────────────────────────────────────
  function startSession() {
    if (sessionActive) return;
    sessionActive = true;
    sessionStart = Date.now();
    ($startBtn.querySelector('.btn-label') || $startBtn).textContent = 'Stop';
    $startBtn.classList.add('active');
    runPhase(0);
  }

  function stopSession() {
    if (!sessionActive) return;
    sessionActive = false;
    clearInterval(timerInterval);

    const duration = Math.round((Date.now() - sessionStart) / 1000);
    saveSession(duration);

    ($startBtn.querySelector('.btn-label') || $startBtn).textContent = 'Begin';
    $startBtn.classList.remove('active');
    $phase.textContent = 'Rest';
    $timer.textContent = '';
    $circle.style.transition = 'transform 1s ease-in-out';
    $circle.style.transform = 'scale(1)';

    stopAllSounds();
    renderHistory();
  }

  // ── Session Storage ────────────────────────────────────────────────────────
  function saveSession(duration) {
    const sessions = getHistory();
    sessions.unshift({
      date: new Date().toISOString(),
      duration_seconds: duration,
      sound_type: currentSound || 'none',
    });
    localStorage.setItem('meditation_sessions', JSON.stringify(sessions.slice(0, 20)));
  }

  function getHistory() {
    try {
      return JSON.parse(localStorage.getItem('meditation_sessions') || '[]');
    } catch {
      return [];
    }
  }

  function renderHistory() {
    const sessions = getHistory().slice(0, 5);
    if (!sessions.length) {
      $sessionList.innerHTML = '<li class="empty">No sessions yet</li>';
      return;
    }
    $sessionList.innerHTML = sessions.map(s => {
      const d = new Date(s.date);
      const time = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const date = d.toLocaleDateString([], { month: 'short', day: 'numeric' });
      const mins = Math.floor(s.duration_seconds / 60);
      const secs = s.duration_seconds % 60;
      const dur = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
      return `<li><span class="session-date">${date} ${time}</span><span class="session-dur">${dur}</span><span class="session-sound">${s.sound_type}</span></li>`;
    }).join('');
  }

  // ── Web Audio Sounds ──────────────────────────────────────────────────────
  function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }

  function stopAllSounds() {
    soundNodes.forEach(n => {
      try { n.stop(); } catch {}
    });
    soundNodes = [];
    currentSound = null;
    document.querySelectorAll('.sound-btn').forEach(b => b.classList.remove('active'));
  }

  function playRain() {
    const ctx = getAudioCtx();
    // Layered pink noise via filtered white noise
    for (let i = 0; i < 3; i++) {
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let j = 0; j < bufferSize; j++) data[j] = Math.random() * 2 - 1;

      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 800 + i * 600;
      filter.Q.value = 0.5;

      const gain = ctx.createGain();
      gain.gain.value = 0.06;

      source.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      source.start();
      soundNodes.push(source);
    }
  }

  function playBowl() {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = 432;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 2);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    soundNodes.push(osc);
  }

  function playForest() {
    const ctx = getAudioCtx();
    // Low rumble + chirp layer for forest ambience
    [200, 600, 1200].forEach((freq, i) => {
      const buf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let j = 0; j < data.length; j++) data[j] = Math.random() * 2 - 1;
      const src = ctx.createBufferSource();
      src.buffer = buf; src.loop = true;
      const f = ctx.createBiquadFilter();
      f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = 0.8;
      const g = ctx.createGain(); g.gain.value = i === 0 ? 0.04 : 0.025;
      src.connect(f); f.connect(g); g.connect(ctx.destination);
      src.start();
      soundNodes.push(src);
    });
  }

  function setSoundType(type) {
    stopAllSounds();
    if (!type) return;

    currentSound = type;
    document.querySelector(`.sound-btn[data-sound="${type}"]`)?.classList.add('active');

    if (type === 'rain') playRain();
    else if (type === 'bowl') playBowl();
    else if (type === 'forest') playForest();
  }

  // ── Theme ──────────────────────────────────────────────────────────────────
  function toggleTheme() {
    const isDark = document.body.dataset.theme === 'dark';
    document.body.dataset.theme = isDark ? 'light' : 'dark';
    localStorage.setItem('meditation_theme', document.body.dataset.theme);
  }

  // ── Init ───────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    $circle     = document.getElementById('breath-circle');
    $timer      = document.getElementById('timer');
    $phase      = document.getElementById('phase-label');
    $startBtn   = document.getElementById('start-btn');
    $sessionList = document.getElementById('session-list');
    $themeBtn   = document.getElementById('theme-btn');

    // Restore theme
    const savedTheme = localStorage.getItem('meditation_theme') || 'light';
    document.body.dataset.theme = savedTheme;

    $startBtn.addEventListener('click', () => {
      sessionActive ? stopSession() : startSession();
    });

    $themeBtn?.addEventListener('click', toggleTheme);

    document.querySelectorAll('.sound-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sound = btn.dataset.sound;
        setSoundType(currentSound === sound ? null : sound);
      });
    });

    // Knob steppers
    document.querySelectorAll('.step-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.dataset.phase);
        const dir = parseInt(btn.dataset.dir);
        phaseDurations[i] = Math.max(0, Math.min(30, phaseDurations[i] + dir));
        document.getElementById('val-' + i).textContent = phaseDurations[i];
        // Dim knob if 0
        btn.closest('.knob-item').classList.toggle('knob-off', phaseDurations[i] === 0);
      });
    });

    // Init knob-off state
    phaseDurations.forEach((d, i) => {
      if (d === 0) document.getElementById('val-' + i)?.closest('.knob-item')?.classList.add('knob-off');
    });

    renderHistory();
  });

  // Expose globals
  window.startSession   = startSession;
  window.stopSession    = stopSession;
  window.setSoundType   = setSoundType;
  window.getHistory     = getHistory;
  window.renderHistory  = renderHistory;
  window.phaseDurations = phaseDurations;
})();
