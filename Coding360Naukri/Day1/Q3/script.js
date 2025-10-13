window.userScore = 0;
window.computerScore = 0;

function Computer() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function Play(userChoice) {
  const computerChoice = Computer();
  const resultText = document.getElementById("res");
  const userScoreSpan = document.getElementById("user-score");
  const computerScoreSpan = document.getElementById("computer-score");

  if (userChoice === computerChoice) {
    resultText.textContent = "The Game has been tied";
    return;
  }

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (winConditions[userChoice] === computerChoice) {
    window.userScore++;
    resultText.textContent = "You have Won the game";
  } else {
    window.computerScore++;
    resultText.textContent = "You have lost the game";
  }

  userScoreSpan.textContent = window.userScore;
  computerScoreSpan.textContent = window.computerScore;
}

// Attach event listeners
document.getElementById("rock").addEventListener("click", () => Play("rock"));
document.getElementById("paper").addEventListener("click", () => Play("paper"));
document.getElementById("scissors").addEventListener("click", () => Play("scissors"));
