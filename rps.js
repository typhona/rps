// The Odin Project  Javascript basics -- 7. Project: Rock Paper Scissors
// Allen Smith 2022

let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;


function computerPlay() {
  compTurn = Math.floor(Math.random() * choices.length)
  return choices[compTurn];
}

function playerPlay() {
  playerTurn = window.prompt("Please choose Rock, Paper, or Scissors");
  playerTurn = playerTurn.toLowerCase();

  if (playerTurn != "rock" && playerTurn != "paper" && playerTurn != "scissors") {
    // console.log(playerTurn)
    tryAgain = window.prompt("Please try again, the options are : Rock, Paper, or Scissors")
    // tryAgain = playerTurn;
    // tryAgain = tryAgain.tolowerCase();
    playerTurn = tryAgain;
    // } else {
    //   return playerTurn;
    // }
  }
  return playerTurn;
}

function playRound(playerSelection, computerSelection) {

  win = "You win: " + playerSelection + " beats " + computerSelection + "."
  lose = "You lose: " + computerSelection + " beats " + playerSelection + "."

  if (computerSelection == playerSelection) {
    return "Its a tie: You both picked " + playerSelection + ".";

  } else if (computerSelection == choices[1] && playerSelection == choices[0] ||
    computerSelection == choices[2] && playerSelection == choices[1] ||
    computerSelection == choices[0] && playerSelection == choices[2]) {
    return lose;

  } else if (computerSelection == choices[0] && playerSelection == choices[1] ||
    computerSelection == choices[2] && playerSelection == choices[0] ||
    computerSelection == choices[1] && playerSelection == choices[2]) {
    return win;
  }

}

function game() {

  for (i = 0; i < 5; i++) {
    computerSelection = computerPlay();
    playerSelection = playerPlay();
    round = playRound(playerSelection, computerSelection);
    if (round == win) {
      playerScore += 1;
    } else if (round == lose) {
      computerScore += 1;
    }

    // Display results per round
    console.log("Game: " + (i + 1))
    console.log(round);
    console.log("Players Score: " + playerScore);
    console.log("Computers Score: " + computerScore);
    console.log("\n")
  }

  // Display final score and announce the winner.
  console.log("Final Score:");
  if (playerScore > computerScore) {
    console.log("Player wins: " + playerScore + " to " + computerScore);
  } else if (playerScore < computerScore) {
    console.log("Computer wins: " + computerScore + " to " + playerScore)
  } else {
    console.log("It's a tie: " + computerScore + " to " + playerScore)

  }

}
game();