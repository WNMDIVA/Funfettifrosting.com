// =========================================================
// 1. PREVENT JUMP ON REFRESH & STRIP HASH
// =========================================================

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

if (window.location.hash) {
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

  const cards = document.querySelectorAll(".oc-card");

  cards.forEach(card => {
    let touchStartY = 0;
    let touchStartX = 0;

    card.addEventListener("touchstart", (e) => {
      const touch = e.touches[0];
      touchStartY = touch.clientY;
      touchStartX = touch.clientX;
    }, { passive: true });

    card.addEventListener("touchend", (e) => {
      const touch = e.changedTouches[0];
      const deltaY = Math.abs(touch.clientY - touchStartY);
      const deltaX = Math.abs(touch.clientX - touchStartX);

      if (deltaY < 10 && deltaX < 10) {
        card.classList.toggle("flipped");
      }
    }, { passive: true });

    card.addEventListener("click", (e) => {
      if (e.target.closest(".Janus-info, .Hezekial-info, .Juliet-info, .Janus-back-text, .Hezekial-back-text, .Juliet-back-text")) {
        return;
      }

      e.stopPropagation();
      card.classList.toggle("flipped");
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.classList.toggle("flipped");
      }
    });
  });

  // =========================================================
  // 4. BACKGROUND MUSIC CONTROLS
  // =========================================================

  const music = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");
  const musicIcon = document.getElementById("music-icon");
  const musicStatus = document.getElementById("music-status");
  const archiveEntry = document.getElementById("archive-entry");
  const enterArchiveBtn = document.getElementById("enter-archive");

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
    }

    function toggleMusic() {
      if (isPlaying) {
        music.pause();
        setMusicState(false);
        isPlaying = false;
      } else {
        music.play().then(() => {
          setMusicState(true);
          isPlaying = true;
        }).catch(err => {
          console.log("Audio play blocked by browser:", err);
        });
      }
    }

    musicBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMusic();
    });
  }

  if (archiveEntry && enterArchiveBtn) {
    enterArchiveBtn.addEventListener("click", () => {
      archiveEntry.classList.add("hidden");

      if (music) {
        music.play().then(() => {
          if (musicIcon && musicStatus && musicBtn) {
            musicIcon.textContent = "🔊";
            musicStatus.textContent = "MUSIC: ON";
            musicBtn.classList.add("playing");
          }
        }).catch(err => {
          console.log("Entry music play blocked by browser:", err);
        });
      }
    });
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
