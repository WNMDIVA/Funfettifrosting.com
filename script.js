function openProfile(name, role, description) {
  const modal = document.getElementById("profile-modal");

  document.getElementById("modal-name").textContent = name;
  document.getElementById("modal-role").textContent = role;
  document.getElementById("modal-description").textContent = description;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProfile() {
  const modal = document.getElementById("profile-modal");

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProfile();
  }
});
