// =========================================================
// 1. PREVENT JUMP ON REFRESH & STRIP HASH
// =========================================================

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Remember where we were asked to land (e.g. arriving from a character page
// via index.html#ocs) BEFORE stripping the hash, so we can still scroll there.
const incomingHash = window.location.hash;

if (incomingHash) {
  history.replaceState(null, '', window.location.pathname);
}

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});


// =========================================================
// 2. SMOOTH SCROLL & PREVENT # FROM APPEARING IN URL
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

  // Intercept ALL links that start with '#' (nav, buttons, logo)
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // <-- THIS STOPS THE URL FROM CHANGING

      const targetId = this.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // =========================================================
  // 3. TAROT CARD FLIP
  // =========================================================

  const cardData = window.CHARACTERS || [];

  const grid = document.getElementById("oc-grid");

  if (grid) {
    grid.innerHTML = cardData.map((card) => `
      <article class="oc-card" tabindex="0" role="button" aria-label="Card for ${card.name}">
        <div class="oc-card-inner">
          <div class="oc-card-front">
            <div class="oc-image ${card.cssClass}-image">
              <img src="${card.frontImage}" alt="${card.name}">
            </div>
            <div class="oc-info">
              <span class="tag">${card.frontTag}</span>
              <h3>${card.frontTitle}</h3>
              <p class="oc-blurb">${card.frontText}</p>
              <a class="button oc-open" href="${card.id}.html">OPEN FILE →</a>
            </div>
          </div>

          <div class="oc-card-back" inert>
            <div class="oc-image ${card.cssClass}-image">
              <img src="${card.backImage}" alt="${card.name} alternate artwork">
            </div>
            <div class="oc-info oc-info-back">
              <span class="tag">${card.backTag}</span>
              <h3>${card.backTitle}</h3>
              <p class="oc-blurb">${card.backText.join(" ")}</p>
              <a class="button oc-open" href="${card.id}.html">OPEN FILE →</a>
            </div>
          </div>
        </div>
      </article>
    `).join("");
  }

  const cards = document.querySelectorAll(".oc-card");

  cards.forEach(card => {
    let downX = 0;
    let downY = 0;

    const faceFront = card.querySelector(".oc-card-front");
    const faceBack = card.querySelector(".oc-card-back");

    // backface-visibility hides the away-facing side but leaves its
    // "open file" link in the tab order — keep it out of reach.
    function toggleFlip() {
      const flipped = card.classList.toggle("flipped");

      (flipped ? faceFront : faceBack).setAttribute("inert", "");
      (flipped ? faceBack : faceFront).removeAttribute("inert");
    }

    // Record where the press started so a swipe-to-scroll isn't read as a tap.
    card.addEventListener("pointerdown", (e) => {
      downX = e.clientX;
      downY = e.clientY;
    });

    // One handler for mouse AND touch: tapping anywhere on the card flips it,
    // except the "open file" link, which is allowed to navigate.
    card.addEventListener("click", (e) => {
      if (e.target.closest(".oc-open")) {
        return;
      }

      if (Math.abs(e.clientX - downX) > 10 || Math.abs(e.clientY - downY) > 10) {
        return;
      }

      toggleFlip();
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleFlip();
      }
    });
  });

  // Land on the section we arrived for (e.g. index.html#ocs from a character page).
  // This has to jump, not glide: `scroll-behavior: smooth` on <html> would
  // otherwise animate it, and the animation gets cancelled as the card artwork
  // loads and shifts the layout underneath it.
  function landOnIncomingSection() {
    if (!incomingHash) return;

    const landing = document.getElementById(incomingHash.slice(1));
    if (!landing) return;

    const root = document.documentElement;
    const previous = root.style.scrollBehavior;

    root.style.scrollBehavior = "auto";
    landing.scrollIntoView({ block: "start" });
    root.style.scrollBehavior = previous;
  }

  landOnIncomingSection();

  // Run again once the images have their real sizes.
  window.addEventListener("load", landOnIncomingSection);

  // =========================================================
  // 4. BACKGROUND MUSIC CONTROLS
  // =========================================================

  const music = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");
  const musicIcon = document.getElementById("music-icon");
  const musicStatus = document.getElementById("music-status");
  const archiveEntry = document.getElementById("archive-entry");
  const enterArchiveBtn = document.getElementById("enter-archive");
  const snake = document.querySelector(".ouroboros-container");
  const heartbeatSound = new Audio("audio/heartbeat.wav");

  function triggerHeartbeat() {
    if (!snake) return;

    snake.classList.remove("beat");
    void snake.offsetWidth;
    snake.classList.add("beat");

    heartbeatSound.currentTime = 0;
    heartbeatSound.play().catch(() => {
      // Browsers may block autoplay until the user interacts.
    });

    setTimeout(() => {
      snake.classList.remove("beat");
    }, 1000);
  }

  if (snake) {
    snake.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      triggerHeartbeat();
    });
    snake.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        triggerHeartbeat();
      }
    });
  }

  // sessionStorage may throw in private-browsing / blocked-storage modes.
  function remember(key, value) {
    try {
      sessionStorage.setItem(key, value);
    } catch (err) {
      // Not important enough to break the page over.
    }
  }

  function recall(key) {
    try {
      return sessionStorage.getItem(key);
    } catch (err) {
      return null;
    }
  }

  if (music && musicBtn) {
    music.volume = 0.35;

    let isPlaying = false;

    function setMusicState(playing) {
      if (playing) {
        musicIcon.textContent = "🔊";
        musicStatus.textContent = "MUSIC: ON";
        musicBtn.classList.add("playing");
      } else {
        musicIcon.textContent = "🔇";
        musicStatus.textContent = "MUSIC: OFF";
        musicBtn.classList.remove("playing");
      }

      isPlaying = playing;
      remember("musicOn", playing ? "1" : "0");
    }

    function toggleMusic() {
      if (isPlaying) {
        music.pause();
        setMusicState(false);
      } else {
        music.play().then(() => {
          setMusicState(true);
        }).catch(err => {
          console.log("Audio play blocked by browser:", err);
        });
      }
    }

    musicBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMusic();
    });

    // Carry the music across page navigations. Browsers will often refuse to
    // autoplay without a fresh user gesture — if so the button just reads OFF
    // and one tap resumes it.
    if (recall("musicOn") === "1") {
      music.play().then(() => {
        setMusicState(true);
      }).catch(() => {
        setMusicState(false);
      });
    }

    // Pause the background track while a one-off clip (a voice claim) plays,
    // then bring it back if it was on. Used by character.js.
    window.ArchiveAudio = {
      duckFor(clip) {
        if (!clip) return;

        const wasPlaying = isPlaying;

        if (wasPlaying) {
          music.pause();
          musicBtn.classList.remove("playing");
        }

        const restore = () => {
          clip.removeEventListener("ended", restore);
          clip.removeEventListener("pause", restore);

          if (wasPlaying) {
            music.play().then(() => {
              musicBtn.classList.add("playing");
            }).catch(() => {
              setMusicState(false);
            });
          }
        };

        clip.addEventListener("ended", restore);
        clip.addEventListener("pause", restore);
      }
    };
  }

  if (archiveEntry) {
    // Coming back from a character page shouldn't make you knock twice.
    if (recall("archiveEntered") === "1") {
      archiveEntry.classList.add("no-transition", "hidden");
    }

    if (enterArchiveBtn) {
      enterArchiveBtn.addEventListener("click", () => {
        archiveEntry.classList.add("hidden");
        remember("archiveEntered", "1");

        if (music) {
          music.play().then(() => {
            if (musicIcon && musicStatus && musicBtn) {
              musicIcon.textContent = "🔊";
              musicStatus.textContent = "MUSIC: ON";
              musicBtn.classList.add("playing");
              remember("musicOn", "1");
            }
          }).catch(err => {
            console.log("Entry music play blocked by browser:", err);
          });
        }
      });
    }
  }

  document.addEventListener("pointerdown", (event) => {
    const burst = document.createElement("span");
    burst.className = "starburst";

    const x = event.clientX;
    const y = event.clientY;
    const dx = (Math.random() * 80 - 40) + "px";
    const dy = (Math.random() * 80 - 40) + "px";

    burst.style.left = x + "px";
    burst.style.top = y + "px";
    burst.style.setProperty("--dx", dx);
    burst.style.setProperty("--dy", dy);

    document.body.appendChild(burst);

    setTimeout(() => {
      burst.remove();
    }, 700);
  });

});
