//Jennifer Huang
//2/3/2022
//n220

//remove red function
function removeRed(c) { 
    c.setRed(0);
    return c;
}

//create canvas
function setup(){
    createCanvas(400, 300);
}

//draw circle
function draw() {
    background(125, 127, 128);
    let noRed = removeRed( color(170, 200, 150) );

    fill(noRed);
    circle(100, 100, 50);
}