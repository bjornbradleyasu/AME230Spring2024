let wheel;
let angle = 0;

function preload() {
  wheel = loadImage("car_wheel.png");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(128);

  textFont('Verdana');
  textSize(48);
  textAlign(RIGHT);
  text('FINAL', width - 5, 200);
}
