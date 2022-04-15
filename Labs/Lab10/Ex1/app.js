//Jennifer Huang
//4/13/2022
//n220

//define IDs as variable
let redSquare = document.getElementById("redSquare");
let greenSquare = document.getElementById("greenSquare");
let blueSquare = document.getElementById("blueSquare");

//add event listener for when square is clicked
redSquare.addEventListener("click", changeColor);
greenSquare.addEventListener("click", changeColor);
blueSquare.addEventListener("click", changeColor);

//changes color of square using data attribute
function changeColor(event) {
  let color = event.target.getAttribute("data-color");
  event.target.style.backgroundColor = color;
}