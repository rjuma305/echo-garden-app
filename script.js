// script.js — Echo Garden Soft Interactions

document.addEventListener("DOMContentLoaded", () => {
  const ecosystemItems = document.querySelectorAll("#ecosystem-selection li");

  ecosystemItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.boxShadow = "0 0 12px rgba(100, 180, 255, 0.4)";
      item.style.transition = "box-shadow 0.3s ease";
    });

    item.addEventListener("mouseout", () => {
      item.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    });

    item.addEventListener("click", () => {
      alert(`Your spirit senses something in the ${item.textContent}...`);
    });
  });
});