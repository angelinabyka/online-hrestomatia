function applyKidsMode() {
  const kids = localStorage.getItem("kidsMode") === "1";
  document.body.classList.toggle("kids", kids);
  const btn = document.getElementById("kidsToggle");
  if (btn) btn.textContent = kids ? "📚 Книжный режим" : "🧒 Детский режим";
}

function initKidsToggle() {
  const btn = document.getElementById("kidsToggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const kids = localStorage.getItem("kidsMode") === "1";
    localStorage.setItem("kidsMode", kids ? "0" : "1");
    applyKidsMode();
  });
}

function renderAuthors() {
  const grid = document.getElementById("authorsCatalog");
  if (!grid) return;

  grid.innerHTML = AUTHORS.map(a => `
    <a class="author-card" href="item.html?id=${a.id}">
      <img src="${a.img}" alt="${a.name}" class="author-thumb">
      <div class="author-card-info">
        <h2>${a.name}</h2>
        <p>${a.years}</p>
      </div>
    </a>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  applyKidsMode();
  initKidsToggle();
  renderAuthors();
});