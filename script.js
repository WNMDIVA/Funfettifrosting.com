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
