//
// Bounce1
// A simple bouncing ball - it has perfect bounces,
// it never slows down.

// These variables store the position, size, and speed.
let positionX = 300;
let positionY = 300;
let radius = 20;
let velocityX = 3;
let velocityY = 5;
let red = 0;
let green = 0;
let blue = 0;

function setup() {
  createCanvas(600, 550);
}
function drawBackground() {
  fill(160);
  rect(100, 100, 400, 350);
}

function drawBall(red, green, blue) {
  fill (red, green, blue);
  ellipse(positionX, positionY, radius * 2, radius * 2);
}

function moveBall() {
  positionX = positionX + velocityX;
  positionY = positionY + velocityY;

  const rightEdge = 500;
  const leftEdge = 100;
  const topEdge = 100;
  const bottomEdge = 450;
  // test to see if it hit an edge
  if (positionX + radius > rightEdge) {
    // hit the right edge
    velocityX = velocityX * -1;
    positionX = rightEdge - radius;
    changeColor();
  }
  else if (positionX - radius < leftEdge) {
    // hit the left edge
    velocityX = velocityX * -1;
    positionX = leftEdge + radius;
    changeColor();
  }

  if (positionY + radius > bottomEdge) {
    // hit the bottom edge
    velocityY = velocityY * -1;
    positionY = bottomEdge - radius;
    changeColor();
  }
  else if (positionY - radius < topEdge) {
    // hit the top edge
    velocityY = velocityY * -1;
    positionY = topEdge + radius;
    changeColor();
  }
}

function changeColor() {
  red = random(50, 255);
  green = random(50, 255);
  blue = random(50, 255);
}

function draw() {
  background(80);

  drawBackground();
  moveBall();
  drawBall(red, green, blue);
}
