//Jennifer Huang
//2/10/2022
//n220

//defines the blockCar object
let blockCar = {
    width: 45, 
    height: 45, 
    carColor: "#9d52cc",
    tireColor: "#000000",
    tireSize: 15,
    x: 300,
    y: 300
};

//uses properties from blockCar to draw blockCar
function showCar(c){
    fill(c.carColor);
    rect(c.x, c.y, c.width, c.height);
    fill(c.tireColor);
    circle(c.x, c.y + c.width, c.tireSize);
    circle(c.x + c.width, c.y + c.width, c.tireSize);
}

//setup the application
//create canvas
function setup(){
    createCanvas(600,400);
    background("#6fd2ed");
}

//draw
function draw(){
    fill(blockCar.carColor);
    rect(blockCar.x - 250, blockCar.y - 250, blockCar.width, blockCar.height);
    fill(blockCar.tireColor);
    circle(blockCar.x - 250, (blockCar.y + blockCar.width) - 250, blockCar.tireSize);
    circle((blockCar.x + blockCar.width) - 250, (blockCar.y + blockCar.width) - 250, blockCar.tireSize);
    
    showCar(blockCar);
}