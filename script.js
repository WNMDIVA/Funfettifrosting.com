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
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.classList.toggle("flipped");
      }
    });
  });

});

// =========================================================
// 1. GLOBAL SMOOTH SCROLL FUNCTION (NO HASH IN URL)
// =========================================================

function scrollToId(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

// =========================================================
// 2. PREVENT AUTO-SCROLL ON REFRESH
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
// 3. TAROT CARD FLIP & MUSIC CONTROLS (RUNS ON LOAD)
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

  // --- TAROT CARDS ---
  const cards = document.querySelectorAll(".oc-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.classList.toggle("flipped");
      }
    });
  });


  // --- BACKGROUND MUSIC ---
  const music = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");
  const musicIcon = document.getElementById("music-icon");
  const musicStatus = document.getElementById("music-status");

  if (music && musicBtn) {
    // Volume level (0.35 = 35%)
    music.volume = 0.35;

    let isPlaying = false;

    function toggleMusic() {
      if (isPlaying) {
        music.pause();
        musicIcon.textContent = "🔇";
        musicStatus.textContent = "MUSIC: OFF";
        musicBtn.classList.remove("playing");
        isPlaying = false;
      } else {
        music.play().then(() => {
          musicIcon.textContent = "🔊";
          musicStatus.textContent = "MUSIC: ON";
          musicBtn.classList.add("playing");
          isPlaying = true;
        }).catch(err => {
          console.log("Audio play blocked by browser:", err);
        });
      }
    }

    // Toggle on button click
    musicBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMusic();
    });

    // Start music on user's first click anywhere on page
    function startOnFirstInteraction() {
      if (!isPlaying) {
        music.play().then(() => {
          musicIcon.textContent = "🔊";
          musicStatus.textContent = "MUSIC: ON";
          musicBtn.classList.add("playing");
          isPlaying = true;
        }).catch(() => {});
      }
      document.removeEventListener("click", startOnFirstInteraction);
    }

    document.addEventListener("click", startOnFirstInteraction);
  }

});
