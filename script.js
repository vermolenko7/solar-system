document.addEventListener("DOMContentLoaded", () => {
  const pauseBtn = document.getElementById("pauseBtn");
  let paused = false;

  if (pauseBtn) {
    pauseBtn.addEventListener("click", () => {
      paused = !paused;
      document.body.classList.toggle("paused", paused);
      pauseBtn.textContent = paused ? "START ORBITS" : "PAUSE ORBITS";
    });
  }

  const cards = document.querySelectorAll(".planet-card");

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";

    setTimeout(() => {
      card.style.transition = "opacity 0.7s ease, transform 0.7s ease, border-color 0.4s ease, box-shadow 0.4s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 150 + index * 100);
  });
});