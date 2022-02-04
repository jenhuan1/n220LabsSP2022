//Jennifer Huang
//2/1/2022
//n220

//setup the application
//create canvas
function setup() {
    createCanvas(600,400);
}

function draw() {
    drawFace(mouseX,mouseY);
}

//functions
function drawFace(x,y) {
    //draw face
    circle(x, y, 40);
    circle(x-12, y-2, 5);
    circle(x+12, y-2, 5);
    arc(x-20, y+5, 100, 50, 0, HALF_PI);
}