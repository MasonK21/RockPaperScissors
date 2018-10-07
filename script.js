let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let rounds;
const info = document.querySelector(".Info");
const scores = document.querySelector(".Scores");
const result = document.querySelector(".result");

function playRound(playerSelection, computerSelection) {
    result.textContent = "";
    computerSelection = Math.floor(Math.random() * 3)
    if (computerSelection == 0) {
        computerSelection = 'rock';
    }
    else if (computerSelection == 1) {
        computerSelection = 'paper';
    }
    else if (computerSelection == 2) {
        computerSelection = 'scissors';
    }
    if (computerSelection == playerSelection) {
        info.textContent = 'You both picked ' + playerSelection + '. It\'s a tie';
        return rounds--;
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        info.textContent = 'The computer picked rock. You Lose!';
        computerScore++
    }
    else if (computerSelection == 'paper' && playerSelection == 'rock') {
        info.textContent = 'The computer picked paper. You Lose!';
        computerScore++;
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        info.textContent = 'The computer picked scissors. You Lose!';
        computerScore++;
    }
    else if (computerSelection == 'rock' && playerSelection == 'paper') {
        info.textContent = 'The computer picked rock. You Win!';
        playerScore++;
    }
    else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        info.textContent = 'The computer picked paper. You Win!';
        playerScore++;
    }
    else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        info.textContent = 'The computer picked scissors. You Win!';
        playerScore++;
    }
    checkScore();
}
function checkScore() {
    scores.textContent = playerScore + ' | ' + computerScore;
    if (playerScore >= 5) {
        result.textContent = "You won this game " + playerScore + " to " + computerScore + "!";
        resetScore(); 
    }
    else if (computerScore >= 5) {
        result.textContent = "You lost this game " + playerScore + " to " + computerScore + "!";
        resetScore();
    }
}
function resetScore() {
    scores.textContent = "";
    info.textContent = "";
    playerScore = 0;
    computerScore = 0;
}
function resetGame() {
    result.textContent = "";
    scores.textContent = "";
    info.textContent = "";
    playerScore = 0;
    computerScore = 0;
    scores.textContent = playerScore + ' | ' + computerScore;
}
resetGame();