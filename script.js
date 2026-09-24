// ==========================================
// EVO-KiLLER - GAME LIST
// ==========================================

// Har game ki entry yahan add hogi.
// id    -> unique naam, space nahi
// title -> card par dikhne wala naam
// icon  -> card icon
// desc  -> game ki short description
// path  -> game ke index.html ka path

const games = [
  {
    id: "my-gun-life",
    title: "MY GUN LiFE",
    icon: "⚡",
    desc: "Action • Adventure",
    path: "GAMES/MY%20GUN%20LiFE/index.html"
  }
];


// ==========================================
// GAME GRID
// ==========================================

const grid = document.getElementById("gameGrid");

if (grid) {
  games.forEach(game => {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
      <div class="thumb">${game.icon}</div>

      <h3>${game.title}</h3>

      <p>${game.desc}</p>
    `;

    card.onclick = () => {
      openGame(game.path);
    };

    grid.appendChild(card);

  });
}


// ==========================================
// OPEN GAME
// ==========================================

function openGame(path) {

  const gameFrame = document.getElementById("gameFrame");
  const overlay = document.getElementById("overlay");

  if (!gameFrame || !overlay) {
    console.error("Game frame ya overlay nahi mila.");
    return;
  }

  gameFrame.src = path;

  overlay.classList.add("open");
}


// ==========================================
// CLOSE GAME
// ==========================================

function closeGame() {

  const overlay = document.getElementById("overlay");
  const gameFrame = document.getElementById("gameFrame");

  if (overlay) {
    overlay.classList.remove("open");
  }

  if (gameFrame) {
    gameFrame.src = "";
  }
}


// ==========================================
// ESC KEY SE GAME CLOSE
// ==========================================

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {
    closeGame();
  }

});
