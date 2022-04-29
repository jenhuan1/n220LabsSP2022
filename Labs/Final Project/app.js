//Jennifer Huang
//4/21/2022
//n220

//variables
let cards = document.getElementsByClassName("card");
let tries = document.getElementById("tries");

let cardFlip = false;
let card1 = null;
let card1Html = null;
let card2 = null;
let card2Html = null;
let triesNum = 0;

//loop through divs + add event listener
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", pickCards);
}

//when click on card
function pickCards(event) {
  let group = event.target.dataset.flip;
  let color = event.target.dataset.color;
  event.target.innerHTML = group;
  event.target.style.color = color;

  //check for two cards flipped
  if (cardFlip == false) {
    card1 = event.target.dataset.flip;
    card1Html = event.target;
    cardFlip = true;
  }
  //if one card flipped
  else if (cardFlip == true) {
    card2 = event.target.dataset.flip;
    card2Html = event.target;

    setTimeout(function () {
      checkMatch();
    }, 680);

    cardFlip = false;
  }
}

//check whether cards match
function checkMatch() {
  //if match
  if (card1 == card2) {
    //adds one to the turn
    triesNum++;
    tries.innerHTML = "Tries: " + triesNum;
  }
  //if don't match
  else {
    //remove innerHTML from cards
    card1Html.innerHTML = "";
    card2Html.innerHTML = "";

    triesNum++;
    tries.innerHTML = "Tries: " + triesNum;
  }
}

