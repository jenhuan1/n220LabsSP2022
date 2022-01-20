//Jennifer Huang
//1/18/2022
//n220

//application level variables
var startX = "199"
var pink = "#f78dbd"
//setup the application
//create canvas

function setup() {
    createCanvas(410,700);
    rect(130, 560, 140, -385);
    line(startX, 550, 200, 200);
    noStroke();
    fill(189, 247, 166);
    circle(200, 430, 50);
    fill(166, 217, 247);
    circle(200, 332, 50);
    fill(pink);
    circle(200, 234, 50);
}