// The Odin Project  Javascript basics -- 7. Project: Rock Paper Scissors
// Allen Smith 2022

let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let rounds = 5;
let rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper');
let scissorsBtn = document.querySelector('.scissors');
let scores = document.querySelector('.scores');


rockBtn.addEventListener('click', (e) => {
  playerSelection = rockBtn.innerText.toLowerCase();
  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});
paperBtn.addEventListener('click', (e) => {
  playerSelection = paperBtn.innerText.toLowerCase();
  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});
scissorsBtn.addEventListener('click', (e) => {
  playerSelection = scissorsBtn.innerText.toLowerCase();
  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});


function computerPlay() {
  compTurn = Math.floor(Math.random() * choices.length)
  return choices[compTurn];

}

function playRound(playerSelection, computerSelection) {

  pScore = document.createElement('p');
  cScore = document.createElement('p');
  pLose = document.createElement('h2');
  pWin = document.createElement('h2');

  win = "You win: " + playerSelection + " beats " + computerSelection + ".";
  lose = "You lose: " + computerSelection + " beats " + playerSelection + ".";

  if (computerSelection === playerSelection) {
    pWin.innerText += "Its a tie! You both picked : " + playerSelection;
    scores.appendChild(pWin);

  } else if (computerSelection == choices[1] && playerSelection == choices[0] ||
    computerSelection == choices[2] && playerSelection == choices[1] ||
    computerSelection == choices[0] && playerSelection == choices[2]) {
    computerScore += 1;
    pLose.innerText += lose;
    scores.appendChild(pLose);
  } else if (computerSelection == choices[0] && playerSelection == choices[1] ||
    computerSelection == choices[2] && playerSelection == choices[0] ||
    computerSelection == choices[1] && playerSelection == choices[2]) {
    playerScore += 1;
    pWin.innerText += win;
    scores.appendChild(pWin);
  };

  // Running tally of scores



  pScore.innerText += "Players Score: " + playerScore;
  scores.appendChild(pScore);
  cScore.innerText += "Computers Score: " + computerScore;
  scores.appendChild(cScore);



  if (computerScore >= rounds || playerScore >= rounds) {
    fsTitle = document.createElement('h2');
    pFscore = document.createElement('h2');
    cFscore = document.createElement('h2');

    // Display final score and announce the winner
    fsTitle.innerText += "Final Score:";
    scores.appendChild(fsTitle);
    if (playerScore > computerScore) {
      pFscore.innerText = "You win: " + playerScore + " to " + computerScore;
      scores.appendChild(pFscore);
    } else {
      (playerScore < computerScore)
      cFscore.innerText = "The computer wins: " + computerScore + " to " + playerScore;
      scores.appendChild(cFscore);

    }
  }
}