let userMove = "";
let computerMove = "";
let result = "";

let score = JSON.parse(localStorage.getItem("score"));

if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}

if (score.wins > 0 || score.losses > 0 || score.ties > 0) {
  document.querySelector(
    ".scorecard"
  ).innerHTML = `Wins: ${score.wins}  Losses: ${score.losses}  Ties: ${score.ties}`;
}

function processMove(userMove) {
  computerMove = getComputerMove();

  if (userMove === "rock") {
    result = getResult(userMove, computerMove);
  } else if (userMove === "paper") {
    result = getResult(userMove, computerMove);
  } else {
    result = getResult(userMove, computerMove);
  }

  document.querySelector(".result-txt").innerHTML = result;

  document.querySelector(".result-visuals").innerHTML = ` You: 
  <img src = "pictures/${userMove}-emoji.png" alt = "" class = "userMove1"/>, 
  <img src = "pictures/${computerMove}-emoji.png" alt = "" class = "computerMove1"/>
   Computer
  `;

  if (result == "You Win") {
    score.wins += 1;
  } else if (result == "You Lose") {
    score.losses += 1;
  } else {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(
    ".scorecard"
  ).innerHTML = `Wins: ${score.wins}  Losses: ${score.losses}  Ties: ${score.ties}`;

  console.log(userMove);
  console.log(computerMove);
}

function getComputerMove() {
  const random = Math.random();
  console.log("Number: ", random);
  if (random < 1 / 3) {
    return "rock";
  } else if (random >= 1 / 3 && random < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getResult(userMove, computerMove) {
  if (userMove === "rock") {
    if (computerMove === "rock") {
      return "Tie";
    } else if (computerMove === "paper") {
      return "You Lose";
    } else {
      return "You Win";
    }
  } else if (userMove === "paper") {
    if (computerMove === "rock") {
      return "You Win";
    } else if (computerMove === "paper") {
      return "Tie";
    } else {
      return "You Lose";
    }
  } else {
    if (computerMove === "rock") {
      return "You Lose";
    } else if (computerMove === "paper") {
      return "You Win";
    } else {
      return "Tie";
    }
  }
}

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(function () {
      const playerMove = getComputerMove();
      processMove(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}
