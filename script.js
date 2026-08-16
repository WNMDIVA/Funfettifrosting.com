// =========================================================
// 1. PREVENT AUTO-SCROLL ON REFRESH
// =========================================================

// Disable browser scroll restoration so it doesn't remember old scroll positions
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Jump immediately to the top
window.scrollTo(0, 0);

// Remove any hash (#ocs, etc.) left in the address bar on refresh
if (window.location.hash) {
  history.replaceState(null, null, window.location.pathname);
}


// =========================================================
// 2. TAROT CARD FLIP
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".oc-card");

  cards.forEach(card => {
    // Flip card on click
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    // Flip card on Enter or Space for keyboard accessibility
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.classList.toggle("flipped");
      }
    });
  });
});
