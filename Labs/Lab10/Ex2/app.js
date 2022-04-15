//Jennifer Huang
//4/14/2022
//n220

//define IDs as variable
let colorDiv = document.getElementById("colorDiv");
let displayColorDiv = document.getElementById("displayColorDiv");
let red1 = document.getElementById("red1");
let red5 = document.getElementById("red5");
let red10 = document.getElementById("red10");
let green1 = document.getElementById("green1");
let green5 = document.getElementById("green5");
let green10 = document.getElementById("green10");
let blue1 = document.getElementById("blue1");
let blue5 = document.getElementById("blue5");
let blue10 = document.getElementById("blue10");

//add event listener when buttons are clicked
red1.addEventListener("click", addRed);
red5.addEventListener("click", addRed);
red10.addEventListener("click", addRed);
green1.addEventListener("click", addGreen);
green5.addEventListener("click", addGreen);
green10.addEventListener("click", addGreen);
blue1.addEventListener("click", addBlue);
blue5.addEventListener("click", addBlue);
blue10.addEventListener("click", addBlue);

let colors = [0, 0, 0];

//increases red when buttons are clicked
function addRed(event) {
  //get data attribute from buttons
  let number = Number(event.target.getAttribute("data-value"));
  colors[0] += number;
  colorDiv.style.backgroundColor =
    "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";

  //displays current color
  displayColorDiv.innerHTML =
    "Current Color: rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
}

//increases green
function addGreen(event) {
  let number = Number(event.target.getAttribute("data-value"));
  colors[1] += number;
  colorDiv.style.backgroundColor =
    "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
  displayColorDiv.innerHTML =
    "Current Color: rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
}

//increases blue
function addBlue(event) {
  let number = Number(event.target.getAttribute("data-value"));
  colors[2] += number;
  colorDiv.style.backgroundColor =
    "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
  displayColorDiv.innerHTML =
    "Current Color: rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
}