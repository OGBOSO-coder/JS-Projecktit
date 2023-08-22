<<<<<<< HEAD
const startButton = document.getElementById('startButton');
const rollButton = document.getElementById('rollButton');
const endTurnButton = document.getElementById('endTurnButton');
const output = document.getElementById('output');

const player1Score = document.getElementById('player1Score');
const player2Score = document.getElementById('player2Score');
const player3Score = document.getElementById('player3Score');


const numPlayersInput = document.getElementById('numPlayers');
const playerNamesDiv = document.getElementById('playerNames');
const playerName1Input = document.getElementById('playerName1');
const playerName2Input = document.getElementById('playerName2');
const playerName3Input = document.getElementById('playerName3');

let currentPlayer = 0;
let totalScore = 0;
let numPlayers = parseInt(numPlayersInput.value);
let playerNames = [];
let playerScores = [];

startButton.addEventListener('click', () => {
  numPlayers = parseInt(numPlayersInput.value);
  playerNames = [];
  playerScores = [];
  
  for (let i = 1; i <= numPlayers; i++) {
    const playerNameInput = document.getElementById(`playerName${i}`);
    playerNames.push(playerNameInput.value);
    playerScores.push(0);
  }
  
  setupGame();
});

function setupGame() {
  startButton.style.display = 'none';
  numPlayersInput.disabled = true;
  for (let i = 1; i <= numPlayers; i++) {
    document.getElementById(`playerName${i}`).disabled = true;
  }
  
  rollButton.style.display = 'block';
  endTurnButton.style.display = 'block';
  
  updateScores();
  output.innerHTML = `On ${playerNames[currentPlayer]} vuoro.`;
  
  rollButton.addEventListener('click', () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    let rollMessage = `${playerNames[currentPlayer]} heitti: ${roll}`;

    if (roll === 1) {
      rollMessage += '\nHeitit 1. Vuoro loppuu.';
      totalScore = 0;
      endTurn();
    } else {
      totalScore += roll;
      rollMessage += `\nKierroksen pisteet: ${totalScore}`;
    }

    output.textContent = rollMessage;
  });

  endTurnButton.addEventListener('click', () => {
    endTurn();
  });
}

function endTurn() {
  playerScores[currentPlayer] += totalScore;
  updateScores();
  totalScore = 0;
  currentPlayer = (currentPlayer + 1) % numPlayers;
  output.innerHTML = `On ${playerNames[currentPlayer]} vuoro.`;
  checkForWin();
}

function updateScores() {
  for (let i = 0; i < numPlayers; i++) {
    document.getElementById(`player${i + 1}Score`).textContent = `${playerNames[i]}: ${playerScores[i]}`;
  }
}

function checkForWin() {
  for (let i = 0; i < numPlayers; i++) {
    if (playerScores[i] >= 100) {
      output.innerHTML += `<br>${playerNames[i]} voittaa! Peli päättyy.`;
      rollButton.disabled = true;
      endTurnButton.disabled = true;
    }
  }
=======
const startButton = document.getElementById('startButton');
const rollButton = document.getElementById('rollButton');
const endTurnButton = document.getElementById('endTurnButton');
const output = document.getElementById('output');

const player1Score = document.getElementById('player1Score');
const player2Score = document.getElementById('player2Score');
const player3Score = document.getElementById('player3Score');


const numPlayersInput = document.getElementById('numPlayers');
const playerNamesDiv = document.getElementById('playerNames');
const playerName1Input = document.getElementById('playerName1');
const playerName2Input = document.getElementById('playerName2');
const playerName3Input = document.getElementById('playerName3');

let currentPlayer = 0;
let totalScore = 0;
let numPlayers = parseInt(numPlayersInput.value);
let playerNames = [];
let playerScores = [];

startButton.addEventListener('click', () => {
  numPlayers = parseInt(numPlayersInput.value);
  playerNames = [];
  playerScores = [];
  
  for (let i = 1; i <= numPlayers; i++) {
    const playerNameInput = document.getElementById(`playerName${i}`);
    playerNames.push(playerNameInput.value);
    playerScores.push(0);
  }
  
  setupGame();
});

function setupGame() {
  startButton.style.display = 'none';
  numPlayersInput.disabled = true;
  for (let i = 1; i <= numPlayers; i++) {
    document.getElementById(`playerName${i}`).disabled = true;
  }
  
  rollButton.style.display = 'block';
  endTurnButton.style.display = 'block';
  
  updateScores();
  output.innerHTML = `On ${playerNames[currentPlayer]} vuoro.`;
  
  rollButton.addEventListener('click', () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    let rollMessage = `${playerNames[currentPlayer]} heitti: ${roll}`;

    if (roll === 1) {
      rollMessage += '\nHeitit 1. Vuoro loppuu.';
      totalScore = 0;
      endTurn();
    } else {
      totalScore += roll;
      rollMessage += `\nKierroksen pisteet: ${totalScore}`;
    }

    output.textContent = rollMessage;
  });

  endTurnButton.addEventListener('click', () => {
    endTurn();
  });
}

function endTurn() {
  playerScores[currentPlayer] += totalScore;
  updateScores();
  totalScore = 0;
  currentPlayer = (currentPlayer + 1) % numPlayers;
  output.innerHTML = `On ${playerNames[currentPlayer]} vuoro.`;
  checkForWin();
}

function updateScores() {
  for (let i = 0; i < numPlayers; i++) {
    document.getElementById(`player${i + 1}Score`).textContent = `${playerNames[i]}: ${playerScores[i]}`;
  }
}

function checkForWin() {
  for (let i = 0; i < numPlayers; i++) {
    if (playerScores[i] >= 100) {
      output.innerHTML += `<br>${playerNames[i]} voittaa! Peli päättyy.`;
      rollButton.disabled = true;
      endTurnButton.disabled = true;
    }
  }
>>>>>>> fc1d9ea5d63b87f1878f9c0c893c1333f0b92089
}