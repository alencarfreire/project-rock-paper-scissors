function getComputerChoice() {
  let computerChoice;
  const probability = Math.floor(Math.random() * (4 - 1) + 1);
  if (probability == 1) {
    computerChoice = 'rock';
  } else if (probability == 2) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  console.log(`Computador: ${computerChoice}`);
  return computerChoice;
}

function getHumanChoice() {
  let choice = prompt('Choose an option: rock | paper | scissors');
  choice = choice.toLocaleLowerCase();
  console.log(choice);
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let rounds = 5;

  for (i = 0; i < rounds; i++) {
    function playRound(humanChoice, computerChoice) {
      if (humanChoice == computerChoice) {
        console.log(`Draw, both chose ${humanChoice}`);
      } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
      ) {
        console.log(
          `You won this round! ${humanChoice} wins ${computerChoice}`,
        );
        humanScore++;
      } else {
        console.log(
          `The computer won this round! ${computerChoice} wins ${humanChoice}`,
        );
        computerScore++;
      }
    }
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log(`Score: You ${humanScore} | Computer ${computerScore}`);

  if (humanScore > computerScore) {
    console.log(`Congratulations, you won the game!`);
  } else if (humanScore < computerScore) {
    console.log(`Too bad, you lost the game!`);
  } else {
    console.log(`A fair draw!`);
  }
}

playGame();
