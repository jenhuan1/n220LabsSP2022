//Jennifer Huang
//2/3/2022
//n220

//polarPoint function
function polarPoint(r){
    let x = r * Math.sin(mouseX);
    let y = r * Math.cos(mouseX);
    return createVector(x,y);
}

//create canvas
function setup(){
    createCanvas(400, 300);
}

//draw function
function draw(){
    let res = polarPoint(40);
    translate(100, 100);
    background(111, 210, 237);
    circle(res.x, res.y, 10);
}