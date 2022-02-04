//Jennifer Huang
//1/25/2022
//n220

//setup the application
//create canvas
let xPos = 0;
function setup() {
  createCanvas(800,600);
}
  
//draw
function draw() {
  background(64, 99, 173);
  xPos = xPos + 5;
  fill(176, 69, 186);
  circle(xPos, 200, 30);
    
  if(xPos >= 800) {
    circle(0, 200, 30);
  }
}
