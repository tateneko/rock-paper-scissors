
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

    let computerScore = 0
    let userScore = 0
    let RoundOutcomeMessage

    if (userChoice == "rock" && computerChoice == "scissors" ) {
        userScore = userScore++;
        RoundOutcomeMessage = "You win! Rock beats scissors.";
    } else if (userChoice == "paper" && computerChoice == "rock" ) {
        userScore = userScore++;
        RoundOutcomeMessage = "You win! Paper beats rock.";
    } else if (userChoice == "scissors" && computerChoice == "paper" ) {
        userScore = userScore++;
        RoundOutcomeMessage = "You win! Scissors beats paper.";
    } else if (userChoice == "rock" && computerChoice == "paper" ) {
        computerScore = computerScore++;
        RoundOutcomeMessage = "You lose! Paper beats rock.";
    } else if (userChoice == "paper" && computerChoice == "scissors" ) {
        computerScore = computerScore++;
        RoundOutcomeMessage = "You lose! Scissors beats paper.";
    } else if (userChoice == "scissors" && computerChoice == "rock" ) {
        computerScore = computerScore++;
        RoundOutcomeMessage = "You lose! Rock beats scissors.";
    } else if (userChoice == "rock" && computerChoice == "rock" ) {
        userScore = userScore++;
        computerScore = computerScore++;
        RoundOutcomeMessage = "Rock vs rock. It's a tie!";
    } else if (userChoice == "paper" && computerChoice == "paper" ) {
        userScore = userScore++;
        computerScore = computerScore++;
        RoundOutcomeMessage = "Paper vs paper. It's a tie!";
    } else if (userChoice == "scissors" && computerChoice == "scissors" ) {
        userScore = userScore++;
        computerScore = computerScore++;
        RoundOutcomeMessage = "Paper vs paper. It's a tie!";
    }

    console.log(userChoice, computerChoice)
    console.log(RoundOutcomeMessage);

}

playRound(getUserChoice(), getComputerChoice());