// Har game ki entry yahan add hogi.
// id      -> khud choose karo (unique naam, space nahi)
// title   -> card pe dikhne wala naam
// icon    -> emoji ya chhota text (baad mein image se replace kar sakte ho)
// path    -> game ki index.html ka path, e.g. "games/games/my-gun-life/index.html"
const games = [
  {
    id: "my-gun-life",
    title: "My Gun Life",
    icon: "🪂",
    desc: "2D Side-View Battle Royale — 3 levels abhi ready",
    path: "games/games/my-gun-life/index.html.
  }
];

// Neeche ka code khud-ba-khud grid banata hai — ismein kuch badalne ki zarurat nahi
const grid = document.getElementById('gameGrid');

games.forEach(game => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="thumb">${game.icon}</div>
    <h3>${game.title}</h3>
    <p>${game.desc}</p>
  `;
  card.onclick = () => openGame(game.path);
  grid.appendChild(card);
});

function openGame(path){
  document.getElementById('gameFrame').src = path;
  document.getElementById('overlay').classList.add('open');
}

function closeGame(){
  document.getElementById('overlay').classList.remove('open');
  document.getElementById('gameFrame').src = '';
}
