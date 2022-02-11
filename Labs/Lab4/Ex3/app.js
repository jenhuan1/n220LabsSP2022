//Jennifer Huang
//2/10/2022
//n220

//defines the ball object
let ball = {
    y: 200,
    size: 30,
    velocity: 1,
    color: '#6fd2ed'
}

//setup the application
//create canvas
function setup() {
    createCanvas(600, 400);
}

//draw
function draw() {
    background("#807d7d");

    ball.velocity = ball.velocity + 5;
    fill(ball.color);
    circle(ball.velocity, ball.y, ball.size);

    if (ball.velocity > 600) {
        ball.velocity = 0;
    }
}