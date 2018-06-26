const players = document.getElementById("players");
const addPlayerButton = document.getElementById("add-player-button");
const takePhotoButton = document.getElementById("take-photo-button");
const submitPlayersButton = document.getElementById("submit-players-button");

const addPlayer = () => {
  const player = document.createElement("input");
  const breakSpace = document.createElement("br");
  player.setAttribute("type", "text");
  player.setAttribute("name", "Player");
  player.setAttribute("id", "player");
  player.setAttribute("maxlength", "10");
  player.setAttribute("placeholder", "Enter name...");
  players.appendChild(breakSpace);
  players.appendChild(player);
};

const addPhoto = () => {};

const submitPlayers = () => {};

addPlayerButton.addEventListener("click", addPlayer);
takePhotoButton.addEventListener("click", addPhoto);
submitPlayersButton.addEventListener("click", submitPlayers);
