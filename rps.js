// The Odin Project  Javascript basics -- 7. Project: Rock Paper Scissors
// allen smith 2022

// rock beats scissors
// paper beats rock
// scissors beats paper

let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
// const playerSelection = choices[1];


function computerPlay() {
  turn = Math.floor(Math.random() * choices.length)
  return choices[turn];
}

function playerPlay() {
  turn = Math.floor(Math.random() * choices.length)
  return choices[turn];
}

function playRound(playerSelection, computerSelection) {
  // when there is a tie
  if (computerSelection == playerSelection) {
    return "Its a tie: You both picked " + playerSelection + ".";

    //options for when player selects rock
  } else if (computerSelection == choices[1] && playerSelection == choices[0]) {
    return "You lose: " + choices[1] + " beats " + choices[0] + "."
  } else if (computerSelection == choices[2] && playerSelection == choices[0]) {
    return "You win: " + choices[0] + " beats " + choices[2] + "."

    // options for when player selects paper
  } else if (computerSelection == choices[0] && playerSelection == choices[1]) {
    return "You win: Paper beats rock."
  } else if (computerSelection == choices[2] && playerSelection == choices[1]) {
    return "You lose: Scissors beats paper."

    // options for when player selects scissors
  } else if (computerSelection == choices[0] && playerSelection == choices[2]) {
    return "You lose: rock beats scissor."
  } else if (computerSelection == choices[1] && playerSelection == choices[2]) {
    return "You win: Scissors beats paper."
  }

}

function game() {

  for (i = 0; i < 5; i++) {
    computerSelection = computerPlay();
    playerSelection = playerPlay();
    round = playRound(playerSelection, computerSelection);

    // incremental scoring algorithm

    // players score increments by 1
    if (computerSelection == choices[0] && playerSelection == choices[1] ||
      computerSelection == choices[1] && playerSelection == choices[2] ||
      computerSelection == choices[2] && playerSelection == choices[0]) {
      playerScore += 1;

      // computers score increments by 1
    } else if (computerSelection == choices[0] && playerSelection == choices[2] ||
      computerSelection == choices[1] && playerSelection == choices[0] ||
      computerSelection == choices[2] && playerSelection == choices[1]) {
      computerScore += 1;

      // when there is a tie
    } else {
      playerScore = playerScore;
      computerScore = computerScore;
    }
    // Display results per round
    console.log("Game " + [i + 1])
    console.log(round);
    console.log("Players Score: " + playerScore);
    console.log("Computers Score: " + computerScore);
    console.log("\n")
  }
  // display final score and announce the winner.
  console.log("Final Score:");
  if (playerScore > computerScore) {
    console.log("Player wins: " + playerScore + " to " + computerScore);
  } else if (playerScore < computerScore) {
    console.log("Computer wins: " + computerScore + " to " + playerScore)
  } else {
    console.log("It's a tie: " + computerScore + " to " + playerScore)

  }

}
// actually run the game
game();