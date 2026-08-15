// =========================
// TAROT CARD FLIP
// =========================

document.querySelectorAll(".oc-card").forEach(card => {

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

});
