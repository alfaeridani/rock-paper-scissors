function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function checkSingleGameResult(playerSelection, computerSelection, inc) {
    document.getElementById("singleGameResult" + inc).innerHTML = 
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " vs " 
    + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    if (playerSelection == "rock" && computerSelection == "paper") {
        return "lose";
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        return "win";
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        return "win";
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        return "lose";
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        return "lose";
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        return "win";
    } else if (playerSelection == computerSelection) {
        return;
    } else {
        return;
    }
}

function cleanText() {
    for (let i = 0; i < 5 ; i++) {
        document.getElementById("currentScore" + i).innerHTML = "";
        document.getElementById("singleGameResult" + i).innerHTML = "";
    }
    document.getElementById("finalGameResult").innerHTML = "";
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let inc = 0;
    let max = 5;

    function handlePlayerChoice(playerSelection) {
        let computerSelection = getComputerChoice();
        let result = checkSingleGameResult(playerSelection, computerSelection, inc);

        if (result == "win") {
            playerScore++;
        } else if (result == "lose") {
            computerScore++;
        }

        document.getElementById("currentScore" + inc).innerHTML = `Player ${playerScore} - ${computerScore} Computer`;

        ++inc;

        if (inc == max) {
            if (playerScore > computerScore) {
                document.getElementById("finalGameResult").innerHTML = "You win, congratulations!";
            } else if (playerScore < computerScore) {
                document.getElementById("finalGameResult").innerHTML = "You lose...";
            } else {
                document.getElementById("finalGameResult").innerHTML = "Tie! Wanna play again?";
            }
            playerChoiceButtons.style.visibility = "hidden";
            newGame.style.visibility = "visible";
        }
    }

    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");

    rockButton.addEventListener("click", function() {
        handlePlayerChoice("rock");
    });
    paperButton.addEventListener("click", function() {
        handlePlayerChoice("paper");
    });
    scissorsButton.addEventListener("click", function() {
        handlePlayerChoice("scissors");
    });
}

const newGame = document.getElementById("newGame");
const playerChoiceButtons = document.getElementById("playerChoiceButtons");

newGame.addEventListener('click', function() {
    playerChoiceButtons.style.visibility = "visible";
    newGame.style.visibility = "hidden";
    cleanText();
    playGame();
});