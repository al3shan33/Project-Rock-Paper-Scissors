let computerScore = 0;
let playerScore = 0;
let gameCount = 0;

const choice = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
  return choice[Math.floor(Math.random() * choice.length)];
}

// function getComputerChoice() {
//   let randomNumber = Math.floor(Math.random() * 3);
//   switch (randomNumber) {
//     case 0:
//       return 'Rock';
//       break;
//     case 1:
//       return 'Paper';
//       break;
//     case 2:
//       return 'Scissors';
//   }
// }

function singleRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie! You both picked ${playerSelection}.`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You win! Paper beats rock!';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You win! Rock beats scissors!';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You win! Scissors beats paper!';
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;  
  }
}

let playerSelection = prompt('Take your pick: rock, paper, scissors').toLowerCase();
let computerSelection = getComputerChoice();
singleRound(playerSelection, computerSelection);
