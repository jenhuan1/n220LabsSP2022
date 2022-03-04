//Jennifer Huang
//3/3/2022
//n220

//define ID as variable
let divScore = document.getElementById("score");
let divResults = document.getElementById("results");

let score = 0;
let choices = ["Rock", "Paper", "Scissors"];

//if player chooses guard, lose half point
//if player and computer pick same, tie
//win by rock, by paper, by scissors
//lose by rock, by papere, by scissors
//return the score from round
function shoot(player, computer) {
  if (player == guard) {
    score -= 0.5;
  }
  else if (player == computer) {
    score += 0;
  }
  else if (player == rock && computer == "scissors") {
    score++;
  }
  else if (player == paper && computer == "rock") {
    score++;
  }
  else if (player == scissors && computer == "paper") {
    score++;
  }
  else if (player == rock && computer == "paper") {
    score--;
  }
  else if (player == paper && computer == "scissors") {
    score--;
  }
  else if (player == scissors && computer == "rock") {
    score--;
  }
  return score;
}

//player clicks on rock/paper/scissors/guard
function pickRock() {
  let randomChoice = choices[Math.floor(Math.random() * 3)];
  shoot(rock, randomChoice);
  divScore.innerHTML = "Score = " + score;
  divResults.innerHTML = "Your Choice: Rock <br/> Computer's Choice: " + randomChoice;
}
  
function pickPaper() {
  let randomChoice = choices[Math.floor(Math.random() * 3)];
  shoot(paper, randomChoice);
  divScore.innerHTML = "Score = " + score;
  divResults.innerHTML = "Your Choice: Paper <br/> Computer's Choice: " + randomChoice;
}
  
function pickScissors() {
  let randomChoice = choices[Math.floor(Math.random() * 3)];
  shoot(scissors, randomChoice);
    divScore.innerHTML = "Score = " + score;
  divResults.innerHTML = "Your Choice: Scissors <br/> Computer's Choice: " + randomChoice;
}
  
function pickGuard() {
  let randomChoice = choices[Math.floor(Math.random() *3)];
  shoot(guard, randomChoice);
  divScore.innerHTML = "Score = " + score;
  divResults.innerHTML = "Your Choice: Guard <br/> Computer's Choice: " + randomChoice;
}