const btn = document.querySelectorAll("button");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerSelection = ["rock", "paper", "scissors"];
  return computerSelection[
    Math.floor(Math.random() * computerSelection.length)
  ];
}

function playGame(humanSelection) {
  let result = "";
  const computerSelection = getComputerChoice();
  if (humanSelection === computerSelection) {
    result = "Draw, both chose " + humanSelection;
  } else if (
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "paper" && computerSelection === "rock") ||
    (humanSelection === "scissors" && computerSelection === "paper")
  ) {
    result =
      "You won this round! " +
      humanSelection +
      " beats " +
      computerSelection +
      ".";
    humanScore++;
  } else {
    result =
      "The computer won this round! " +
      computerSelection +
      " beats " +
      humanSelection +
      ".";
    computerScore++;
  }
  result += `<br>Scores: Human - ${humanScore}, Computer - ${computerScore}`;

  if (humanScore == 5) {
    result += `<br>Congratulation, you won!`;
  } else if (computerScore == 5) {
    result += `<br>It wasn't this time, the computer won!`;
  }

  document.getElementById("result").innerHTML = result;
}

btn.forEach((button) => {
  button.addEventListener("click", () => {
    playGame(button.id);
  });
});
