// Soft floating animation for social cards
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.1), rgba(30,30,30,0.8))`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.background = "rgba(30,30,30,0.8)";
  });
});
