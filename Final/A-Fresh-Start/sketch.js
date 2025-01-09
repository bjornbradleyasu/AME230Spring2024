// sketch.js



function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  background(255);
  
}

function conversion(degreesF) {
  let degreesK = (degreesF - 32) * (5/9) + 273.15
  return degreesK;
}


//Formula : K = (F - 32) * (5 / 9) + 273.15







