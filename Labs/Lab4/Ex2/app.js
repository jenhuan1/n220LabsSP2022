//Jennifer Huang
//2/10/2022
//n220

//defines the pet object
let pet = {
    x: 600,
    y: 400,
    size: 25,
    offsetX: 50
};

//setup the application
//create canvas
function setup() {
    createCanvas(600, 400);
}

//draw
function draw() {
    background("#807d7d");
    circle(mouseX - pet.offsetX, mouseY, pet.size);

    if(mouseIsPressed && pet.offsetX > 0){
        pet.offsetX = pet.offsetX - 1;
    }

    if(!(mouseIsPressed)){
        pet.offsetX = pet.offsetX + 1;
    }
}