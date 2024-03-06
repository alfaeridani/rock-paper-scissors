function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function checkGameResult(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "lose";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "win";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "win";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "lose";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "lose";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "win";
    } else if (playerSelection === computerSelection) {
        return;
    } else {
        return;
    }
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = checkGameResult(playerSelection, computerSelection);

    if (result === "win") {
        playerScore++;
    } else if (result === "lose") {
        computerScore++;
    }

    playerIcon.setAttribute("src", `./images/${playerSelection}.png`);
    computerIcon.setAttribute("src", `./images/${computerSelection}.png`);
    currentScore.textContent = `${playerScore} - ${computerScore}`;

    if (computerScore === 5) {
        finalResult.textContent = "You lose.";
        playerChoiceButtons.style.visibility = "hidden";
        newGameButton.style.visibility = "visible";
    } else if (playerScore === 5) {
        finalResult.textContent = "You win!";
        playerChoiceButtons.style.visibility = "hidden";
        newGameButton.style.visibility = "visible";
    }
}

const newGameButton = document.getElementById("newGame");
const playerChoiceButtons = document.getElementById("playerChoiceButtons");
const currentScore = document.getElementById("currentScore");
const finalResult = document.getElementById("finalResult");

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const playerIcon = document.getElementById("playerIcon");
const computerIcon = document.getElementById("computerIcon");

let playerScore = 0;
let computerScore = 0;

newGameButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    currentScore.textContent = "";
    finalResult.textContent = "";
    playerIcon.removeAttribute("src");
    computerIcon.removeAttribute("src");
    playerChoiceButtons.style.visibility = "visible";
    newGameButton.style.visibility = "hidden";
})
rockButton.addEventListener("click", function() {
    playRound("rock");
});
paperButton.addEventListener("click", function() {
    playRound("paper");
});
scissorsButton.addEventListener("click", function() {
    playRound("scissors");
});