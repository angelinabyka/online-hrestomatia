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

function loadAuthor() {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const author = AUTHORS.find(a => a.id === id);

  if (!author) {
    document.getElementById("authorName").textContent = "Автор не найден";
    return;
  }

  document.title = author.name + " · Хрестоматия";
  document.getElementById("authorName").textContent = author.name;
  document.getElementById("authorYears").textContent = author.years;
  document.getElementById("authorBio").textContent = author.bio;
  document.getElementById("authorImg").src = author.img;

  const worksGrid = document.getElementById("authorWorks");
  worksGrid.innerHTML = author.works.map(w => `
    <a class="card" href="reader.html?author=${author.id}&id=${w.id}">
      <span class="card-badge">${w.genre}</span>
      <h2 class="card-title">${w.title}</h2>
      <p class="card-desc">${w.desc}</p>
    </a>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  applyKidsMode();
  initKidsToggle();
  loadAuthor();
});

