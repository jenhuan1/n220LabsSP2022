//Jennifer Huang
//1/25/2022
//n220

//setup the application
//create canvas
function setup() {
  createCanvas(400,300);
}

//draw
function draw() {
  background(50);
  fill(46, 65, 232);
  circle(mouseX, mouseY, 30, 30);
    
  if(mouseX > 200){
    fill(240, 50, 50);
    circle(mouseX, mouseY, 30, 30);
  }
}
