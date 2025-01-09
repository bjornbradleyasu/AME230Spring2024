// sketch.js
//
// Text animation template
//

let anim;

let startX = 500;
let endX = 100;

let dogX;
let tigerX;
let elephantX;
let cowX ;

function setup() {
  createCanvas(600, 600);
  anim = new AnimationTicker();
  anim.duration = 3000;
  reset();
  textFont("Verdana");
}

function draw() {
  background(128);

  fill(200,0,0);

  if (anim.isAnimating == true) {
    // things to do when we are animating

    anim.step();

    // this is where we compute the current value

    dogX = anim.linear(startX, endX);
    tigerX = anim.easeInQuad(startX, endX);
    elephantX = anim.easeOutQuad(startX, endX);
    cowX = anim.easeInOutQuad(startX, endX);
  }

  
  textAlign(CENTER, CENTER);
  textSize(100);
  noStroke();
  fill(0);
  text("\u{1F415}", dogX, 100);
  text("\u{1F405}", tigerX, 200);
  text("\u{1F418}", elephantX, 300);
  text("\u{1F404}", cowX, 400);

}

function mousePressed() {
  // start the animation
  anim.start();
}

function reset() {
  dogX = startX;
  tigerX = startX;
  elephantX = startX;
  cowX = startX;
}

function keyPressed() {
  // press "r" key, reset the start position
  if (key == "r") {
    reset();
  }
}


class AnimationTicker {
  constructor() {
    // Is the animation running?
    this.isAnimating = false;

    // t is a value 0-1 that indicates
    // how far the animation has progressed.
    this.t = 0.0;

    // When did the animation start?
    this.startTime = millis();

    // How many milliseconds will the animation run.
    this.duration = 2000;
  }

  start() {
    this.isAnimating = true;
    this.startTime = millis();
    this.t = 0.0;
  }

  step() {
    if (this.isAnimating == false) {
      return;
    }
    let currentMillis = millis();
    let timeElapsed = currentMillis - this.startTime;
    this.t = timeElapsed / this.duration;
    if (timeElapsed >= this.duration) {
      this.isAnimating = false;
      this.t = 1.0;
    }
  }

  // Use the current animation progress to interpolate
  // a value between start and stop values.
  linear(start, stop) {
    return map(this.t, 0.0, 1.0, start, stop);
  }

  easeInQuad(start, stop) {
    let tt = this.t * this.t;
    return map(tt, 0.0, 1.0, start, stop);
  }

  easeOutQuad(start, stop) {
    let tt = -(this.t * (this.t - 2.0));
    return map(tt, 0.0, 1.0, start, stop);
  }

  // Modeled after the piecewise quadratic
  // y = (1/2)((2x)^2)             ; [0, 0.5)
  // y = -(1/2)((2x-1)*(2x-3) - 1) ; [0.5, 1]
  easeInOutQuad(start, stop) {
    let tt = 0.0
    if (this.t < 0.5) {
        tt = 2.0 * this.t * this.t
    }
    else {
        tt = (-2.0 * this.t * this.t) + (4.0 * this.t) - 1.0;
    }
    return map(tt, 0.0, 1.0, start, stop);
  }
}




 




