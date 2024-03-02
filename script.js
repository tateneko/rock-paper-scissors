

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function getUserChoice() {
    let userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    return userChoice;
}

function playRound(userChoice, computerChoice) {
    
}