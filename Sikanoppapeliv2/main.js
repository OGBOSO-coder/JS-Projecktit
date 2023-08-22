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

let pelaaja = 0;
let pisteet = 0;
let numPlayers = parseInt(numPlayersInput.value);
let playerNames = [];
let pelaajapisteet = [];
let consecutiveTriples = 0;

startButton.addEventListener('click', () => {
  numPlayers = parseInt(numPlayersInput.value);
  playerNames = [];
  pelaajapisteet = [];
  consecutiveTriples = 0;
  
  for (let i = 1; i <= numPlayers; i++) {
    const playerNameInput = document.getElementById(`playerName${i}`);
    playerNames.push(playerNameInput.value);
    pelaajapisteet.push(0);
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
  output.innerHTML = `On ${playerNames[pelaaja]}n vuoro.`;
  
  rollButton.addEventListener('click', () => {
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;
  
    let rollMessage = `${playerNames[pelaaja]} heitti: ${roll1} ja ${roll2}`;
  

    if (roll1 === 1 && roll2 === 1) {
      pisteet += 25;
      rollMessage += `\nSait 25 pistettä kahdella ykkösellä (yhteensä: ${pisteet}).`;
    } else if (roll1 === roll2) {
      const doubledPoints = roll1 * 4;
      pisteet += doubledPoints;
      rollMessage += `\nSait tuplapisteet: ${doubledPoints} (yhteensä: ${pisteet})`;
    } else if (roll1 === 1 || roll2 === 1) {
      rollMessage += '\nToinen nopista on yksi. Vuoro siirtyy.';
      pisteet = 0;
      endTurn();
      
    } else {
      const roundPoints = roll1 + roll2;
      pisteet += roundPoints;
      rollMessage += `\nKierroksen pisteet: ${roundPoints} (yhteensä: ${pisteet})`;
    }
  
    if (roll1 === roll2) {
      consecutiveTriples++;
      if (consecutiveTriples >= 3) {
        rollMessage += '\nHeitit kolme tuplaa peräkkäin. Vuoro siirtyy.';
        pisteet = 0;
        consecutiveTriples = 0;
        endTurn();
        return;
      }
    } else {
      consecutiveTriples = 0;
    }
  
    output.textContent = rollMessage;
  });

  endTurnButton.addEventListener('click', () => {
    endTurn();
  });
}

function endTurn() {
  pelaajapisteet[pelaaja] += pisteet;
  updateScores();
  pisteet = 0;
  pelaaja = (pelaaja + 1) % numPlayers;
  output.innerHTML = `On ${playerNames[pelaaja]} vuoro.`;
  checkForWin();
}

function updateScores() {
  for (let i = 0; i < numPlayers; i++) {
    document.getElementById(`player${i + 1}Score`).textContent = `${playerNames[i]}: ${pelaajapisteet[i]}`;
  }
}

function checkForWin() {
  for (let i = 0; i < numPlayers; i++) {
    if (pelaajapisteet[i] >= 100) {
      output.innerHTML += `<br>${playerNames[i]} voittaa! Peli päättyy.`;
      rollButton.disabled = true;
      endTurnButton.disabled = true;
    }
  }
}

output.innerHTML = 'Aseta pelaajien määrä ja nimet, sitten aloita peli.';
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

let pelaaja = 0;
let pisteet = 0;
let numPlayers = parseInt(numPlayersInput.value);
let playerNames = [];
let pelaajapisteet = [];
let consecutiveTriples = 0;

startButton.addEventListener('click', () => {
  numPlayers = parseInt(numPlayersInput.value);
  playerNames = [];
  pelaajapisteet = [];
  consecutiveTriples = 0;
  
  for (let i = 1; i <= numPlayers; i++) {
    const playerNameInput = document.getElementById(`playerName${i}`);
    playerNames.push(playerNameInput.value);
    pelaajapisteet.push(0);
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
  output.innerHTML = `On ${playerNames[pelaaja]}n vuoro.`;
  
  rollButton.addEventListener('click', () => {
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;
  
    let rollMessage = `${playerNames[pelaaja]} heitti: ${roll1} ja ${roll2}`;
  

    if (roll1 === 1 && roll2 === 1) {
      pisteet += 25;
      rollMessage += `\nSait 25 pistettä kahdella ykkösellä (yhteensä: ${pisteet}).`;
    } else if (roll1 === roll2) {
      const doubledPoints = roll1 * 4;
      pisteet += doubledPoints;
      rollMessage += `\nSait tuplapisteet: ${doubledPoints} (yhteensä: ${pisteet})`;
    } else if (roll1 === 1 || roll2 === 1) {
      rollMessage += '\nToinen nopista on yksi. Vuoro siirtyy.';
      pisteet = 0;
      endTurn();
      
    } else {
      const roundPoints = roll1 + roll2;
      pisteet += roundPoints;
      rollMessage += `\nKierroksen pisteet: ${roundPoints} (yhteensä: ${pisteet})`;
    }
  
    if (roll1 === roll2) {
      consecutiveTriples++;
      if (consecutiveTriples >= 3) {
        rollMessage += '\nHeitit kolme tuplaa peräkkäin. Vuoro siirtyy.';
        pisteet = 0;
        consecutiveTriples = 0;
        endTurn();
        return;
      }
    } else {
      consecutiveTriples = 0;
    }
  
    output.textContent = rollMessage;
  });

  endTurnButton.addEventListener('click', () => {
    endTurn();
  });
}

function endTurn() {
  pelaajapisteet[pelaaja] += pisteet;
  updateScores();
  pisteet = 0;
  pelaaja = (pelaaja + 1) % numPlayers;
  output.innerHTML = `On ${playerNames[pelaaja]} vuoro.`;
  checkForWin();
}

function updateScores() {
  for (let i = 0; i < numPlayers; i++) {
    document.getElementById(`player${i + 1}Score`).textContent = `${playerNames[i]}: ${pelaajapisteet[i]}`;
  }
}

function checkForWin() {
  for (let i = 0; i < numPlayers; i++) {
    if (pelaajapisteet[i] >= 100) {
      output.innerHTML += `<br>${playerNames[i]} voittaa! Peli päättyy.`;
      rollButton.disabled = true;
      endTurnButton.disabled = true;
    }
  }
}

output.innerHTML = 'Aseta pelaajien määrä ja nimet, sitten aloita peli.';
>>>>>>> fc1d9ea5d63b87f1878f9c0c893c1333f0b92089
