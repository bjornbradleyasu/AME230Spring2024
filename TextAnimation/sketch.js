// sketch.js

let anim;

let space;

let ship;
let shipX;
let shipY;

let smoke;
let smokes = [];
let smokeX;
let smokeY;

function preload() {
  space = loadImage('images/space.jpeg');
}

function setup() {
  createCanvas(740, 740);
  anim = new AnimationTicker();
  anim.duration = 6000;
  reset();
  textFont("Verdana");
}

function draw() {
  background(128);

  image(space, 0, 0, 740, 740);

  shipX = width / 2 - 10;
  shipY = height - 9;

  if (anim.isAnimating) {
    let t = ((millis() - anim.startTime) / anim.duration);
    t = constrain(t, 0, 1); 
    let progress = t * t * t * t;
    shipY = lerp(height - 9, -100, progress);

    let smokeOffsetX = 25;
    let smokeOffsetY = 20;
    smokeX = shipX + smokeOffsetX;
    smokeY = shipY + smokeOffsetY;

    if (shipY + smokeOffsetY < 0) {
      anim.reset();
    }

    if (frameCount % 5 == 0) {
      let vx = random(-2, 2);
      let vy = 3;
      smokes.push({x: smokeX, y: smokeY, vx: vx, vy: vy, spreading: false});
    }
  }

  // Draw the rocket
  push();
  translate(shipX, shipY);
  angleMode(DEGREES);
  rotate(-46.5);
  textSize(120);
  text("🚀", 0, 0); 
  pop();
  
  for (let i = smokes.length - 1; i >= 0; i--) {
    let smoke = smokes[i];
    smoke.x += smoke.vx;
    smoke.y += smoke.vy;
  
    push();
    translate(smoke.x, smoke.y);
    rotate(90);
    textSize(60);
    text("💨", 0, 30);
    pop();
  }
}

function mousePressed() {
  reset();
  anim.start();
}

function reset() {
  smokeX = shipX;
  smokeY = shipY + 30; 
  anim.reset(); 
}

class AnimationTicker {
  constructor() {
    this.isAnimating = false;
    this.duration = 3000; 
    this.startTime = 0;
  }

  start() {
    this.isAnimating = true;
    this.startTime = millis();
  }

  update() {
    let elapsedTime = millis() - this.startTime;
    if (elapsedTime > this.duration) {
      this.isAnimating = false; 
    }
  }

  reset() {
    smokes = [];
    this.isAnimating = false;
  }
}




 




