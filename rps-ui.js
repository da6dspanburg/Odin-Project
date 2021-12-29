// rps-ui.js
// Javascript file for Rock-Paper-Scissors (rps)

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

// playRound - compares choices and declares winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    }
    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        playerScore++;
        roundWinner = 'Player'
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
        computerScore++;
        roundWinner = 'Computer'
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection);
}

// getRandomChoice - Uses Random Number to determine Computer choice
function getRandomChoice() {
    let randomNbr = Math.floor(Math.random() * 3);
    switch (randomNbr) {
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS'
    }
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5;
}


// UI info
const scoreInfo = document.getElementById('scoreInfo');
const scoreMessage = document.getElementById('scoreMessage');
const playerScorePara = document.getElementById('playerScore');
const computerScorePara = document.getElementById('computerScore');
const btnRock = document.getElementById('btnRock');
const btnPaper = document.getElementById('btnPaper');
const btnScissors = document.getElementById('btnScissors');
const btnRestart = document.getElementById('btnRestart');

btnRock.addEventListener('click', () => handleClick('ROCK'));
btnPaper.addEventListener('click', () => handleClick('PAPER'));
btnScissors.addEventListener('click', () => handleClick('SCISSORS'));
btnRestart.addEventListener('click', restartGame);




// Main Routine
const computerSelection = getRandomChoice();
playRound(playerSelection, computerSelection);



function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}