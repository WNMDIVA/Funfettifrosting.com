

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
