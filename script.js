const players = document.getElementById("players");
const addPlayerButton = document.getElementById("add-player-button");
const startGameButton = document.getElementById("start-game-button");
const getDataButton = document.getElementById("get-data-button");

const addPlayer = () => {
  const player = document.createElement("input");
  const breakSpace = document.createElement("br");
  const getData = document.createElement("button");
  player.setAttribute("type", "text");
  player.setAttribute("name", "Player");
  player.setAttribute("id", "player");
  player.setAttribute("maxlength", "10");
  player.setAttribute("placeholder", "Enter name...");
  getData.setAttribute("id", "get-data-button");
  getData.append("Get Data");
  players.appendChild(breakSpace);
  players.appendChild(player);
  players.appendChild(getData);
};

const getData = () => {
  const degrees = document.createElement("h2");
  const response = fetch("tessela.local:8080");
  const json = response.json();
  console.log(json);
};

addPlayerButton.addEventListener("click", addPlayer);
getDataButton.addEventListener("click", getData);
