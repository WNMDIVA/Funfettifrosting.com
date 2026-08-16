// =========================================================
// CHARACTER SHEET
//
// Renders one character's full file into #char-sheet, driven by
// <body data-character="..."> and the shared window.CHARACTERS data.
// The sheet flips between the younger side and the older side.
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

  const sheet = document.getElementById("char-sheet");
  if (!sheet) return;

  const id = document.body.dataset.character;
  const data = (window.CHARACTERS || []).find((c) => c.id === id);

  if (!data) {
    sheet.innerHTML = `
      <div class="char-missing">
        <p class="eyebrow">FILE NOT FOUND</p>
        <h1>REDACTED</h1>
        <p>No archive entry matches "${escapeHtml(id || "")}".</p>
      </div>
    `;
    return;
  }

  // =========================================================
  // 1. RENDER
  // =========================================================

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[ch]);
  }

  const profile = data.profile || {};
  const young = profile.young || {};
  const older = profile.older || {};

  // The older side falls back to the younger clip if it has none of its own.
  const youngVoice = young.voice || "";
  const olderVoice = older.voice || youngVoice;

  function renderStats(stats) {
    if (!stats || !stats.length) return "";

    return `
      <div class="facts char-facts">
        ${stats.map((stat) => `
          <div><span>${escapeHtml(stat.label)}</span>${escapeHtml(stat.value)}</div>
        `).join("")}
      </div>
    `;
  }

  function renderList(items) {
    if (!items || !items.length) return "";

    return `
      <ul class="trait-list">
        ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    `;
  }

  function renderBio(paragraphs) {
    if (!paragraphs || !paragraphs.length) return "";
    return paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("");
  }

  function renderVoice(src, sideLabel) {
    if (!src) return "";

    return `
      <div class="voice-block">
        <button class="button voice-btn" type="button" data-src="${escapeHtml(src)}">
          <span class="voice-btn-label">▶ PLAY VOICE CLAIM</span>
        </button>
        ${profile.voiceClaim ? `
          <p class="voice-note">
            Voice claim (${escapeHtml(sideLabel)}): ${escapeHtml(profile.voiceClaim)}
          </p>
        ` : ""}
      </div>
    `;
  }

  function renderFace(side, opts) {
    return `
      <article class="char-face ${opts.faceClass}" ${opts.hidden ? 'aria-hidden="true" inert' : ""}>
        <div class="char-portrait">
          <img src="${escapeHtml(opts.image)}" alt="${escapeHtml(opts.imageAlt)}">
        </div>

        <div class="char-body">
          <span class="tag">${escapeHtml(opts.tag)}</span>
          <h1>${escapeHtml(opts.title)}</h1>
          <p class="char-side">
            ${escapeHtml(data.name)} · <em>${escapeHtml(side.sideLabel || opts.fallbackLabel)}</em>
          </p>

          ${renderStats(side.stats)}
          ${renderVoice(opts.voice, side.sideLabel || opts.fallbackLabel)}

          <h2>Biography</h2>
          ${renderBio(side.bio)}

          <h2>Traits</h2>
          ${renderList(side.traits)}
        </div>
      </article>
    `;
  }

  sheet.innerHTML = `
    <div class="char-flip" id="char-flip">
      <div class="char-flip-inner" id="char-flip-inner">
        ${renderFace(young, {
          faceClass: "char-face-front",
          image: data.frontImage,
          imageAlt: data.name,
          tag: data.frontTag,
          title: data.frontTitle,
          voice: youngVoice,
          fallbackLabel: "Younger"
        })}
        ${renderFace(older, {
          faceClass: "char-face-back",
          image: data.backImage,
          imageAlt: data.name + " older artwork",
          tag: data.backTag,
          title: data.backTitle,
          voice: olderVoice,
          fallbackLabel: "Older",
          hidden: true
        })}
      </div>
    </div>

    <button class="button char-flip-btn" id="char-flip-btn" type="button" aria-pressed="false">
      ⟲ Flip to their older side
    </button>
  `;

  const flip = document.getElementById("char-flip");
  const inner = document.getElementById("char-flip-inner");
  const flipBtn = document.getElementById("char-flip-btn");
  const front = sheet.querySelector(".char-face-front");
  const back = sheet.querySelector(".char-face-back");

  // =========================================================
  // 2. KEEP BOTH FACES THE SAME HEIGHT
  //
  // The faces are absolutely positioned for the 3D flip, so the
  // container needs a height. Measuring content (rather than using a
  // fixed value) means the whole PAGE scrolls and no inner pane ever
  // needs its own scrollbar — which is what keeps this working on
  // touch devices.
  // =========================================================

  function syncFlipHeight() {
    inner.style.height = "auto";
    const tallest = Math.max(front.scrollHeight, back.scrollHeight);
    inner.style.height = tallest + "px";
  }

  syncFlipHeight();

  // Artwork loading in changes the height.
  sheet.querySelectorAll(".char-portrait img").forEach((img) => {
    if (!img.complete) {
      img.addEventListener("load", syncFlipHeight);
      img.addEventListener("error", syncFlipHeight);
    }
  });

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(syncFlipHeight, 150);
  });

  // Fonts finishing, text rewrapping, anything else that shifts layout.
  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(() => syncFlipHeight());
    observer.observe(front);
    observer.observe(back);
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(syncFlipHeight);
  }

  // =========================================================
  // 3. FLIP
  // =========================================================

  flipBtn.addEventListener("click", () => {
    const flipped = flip.classList.toggle("flipped");

    flipBtn.textContent = flipped
      ? "⟲ Flip to their younger side"
      : "⟲ Flip to their older side";
    flipBtn.setAttribute("aria-pressed", flipped ? "true" : "false");

    // Keep the away-facing side out of the accessibility tree and out of
    // tab order, so you can't tab into an invisible voice button.
    const hidden = flipped ? front : back;
    const shown = flipped ? back : front;

    hidden.setAttribute("aria-hidden", "true");
    hidden.setAttribute("inert", "");
    shown.setAttribute("aria-hidden", "false");
    shown.removeAttribute("inert");
  });

  // =========================================================
  // 4. VOICE CLAIM PLAYBACK
  // =========================================================

  sheet.querySelectorAll(".voice-btn").forEach((btn) => {
    const label = btn.querySelector(".voice-btn-label");
    const clip = new Audio();
    clip.preload = "metadata";
    clip.src = btn.dataset.src;

    let available = false;

    // Until we know the file is really there, don't promise anything.
    btn.disabled = true;
    label.textContent = "◌ LOADING VOICE…";

    clip.addEventListener("loadedmetadata", () => {
      available = true;
      btn.disabled = false;
      label.textContent = "▶ PLAY VOICE CLAIM";
    });

    // Fires when the file is missing — including GitHub Pages' 404 page,
    // which isn't decodable audio.
    clip.addEventListener("error", () => {
      available = false;
      btn.disabled = true;
      btn.classList.add("voice-btn-missing");
      label.textContent = "VOICE: UNAVAILABLE";
      btn.title = "No audio file at " + clip.getAttribute("src");
    });

    clip.addEventListener("ended", () => {
      label.textContent = "▶ PLAY VOICE CLAIM";
    });

    btn.addEventListener("click", () => {
      if (!available) return;

      if (!clip.paused) {
        clip.pause();
        label.textContent = "▶ PLAY VOICE CLAIM";
        return;
      }

      // Duck the background music, then start from the top.
      if (window.ArchiveAudio) {
        window.ArchiveAudio.duckFor(clip);
      }

      clip.currentTime = 0;
      clip.play().then(() => {
        label.textContent = "⏸ STOP VOICE";
      }).catch(() => {
        label.textContent = "VOICE: BLOCKED — TAP AGAIN";
      });
    });
  });

});
