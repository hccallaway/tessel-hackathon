const players = document.getElementById('players');
const addPlayerButton = document.getElementById('add-player-button');
const startGameButton = document.getElementById('start-game-button');

async function getDataFunc() {
  const degrees = document.createElement('h2');
  const response = await fetch('/');
  console.log(response);
  const resData = response.json();
  degrees.innerHTML(resData);
  players.appendChild(degrees);
}

function addPlayer() {
  const player = document.createElement('input');
  const breakSpace = document.createElement('br');
  const getData = document.createElement('button');
  player.setAttribute('type', 'text');
  player.setAttribute('name', 'Player');
  player.setAttribute('id', 'player');
  player.setAttribute('maxlength', '10');
  player.setAttribute('placeholder', 'Enter name...');
  getData.setAttribute('id', 'get-data-button');
  getData.append('Get Data');
  players.appendChild(breakSpace);
  players.appendChild(player);
  players.appendChild(getData);
  getData.addEventListener('click', getDataFunc);
}

addPlayerButton.addEventListener('click', addPlayer);
