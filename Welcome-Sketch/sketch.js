// sketch.js
// Welcome-Sketch
// AME 230
//
// Don't worry about understanding the code in this welcome sketch.
// You only need to be able to open the project, and see it run.

function setup() {
  createCanvas(600, 600);

}

function draw() {
  background(128);
  
  //
  // Welcome text near the center,top of the canvas
  //
  noStroke();
  fill(255);
  textFont("Verdana");
  textSize(40);
  textAlign(CENTER);
  text("Bjorn Bradley", 300, 100);


  //
  // Silly eyes that follow the mouse
  // You aren't supposed to understand any of the code
  // in this project yet. This is just for fun!
  //

  // Eyes
  noStroke();
  fill(255,251,214);
  let eyeLeft = 300 - 42;
  let eyeRight = 300 + 42;
  let eyeY = 300;
  ellipse(eyeLeft,eyeY,78,78);
  ellipse(eyeRight,eyeY,78,78);

  // Pupils
  // Compute a vector from the eye to the mouse position.
  // Use the direction of that vector to offset the pupil.
  // The further the distance to the mouse position, the
  // greater the offset.
  let leftDx = mouseX - eyeLeft;
  let leftDy = mouseY - eyeY;
  let rightDx = mouseX - eyeRight;
  let rightDy = mouseY - eyeY;
  let eyeLeftMouseDistance = dist(mouseX, mouseY, eyeLeft, eyeY);
  let eyeRightMouseDistance = dist(mouseX, mouseY, eyeRight, eyeY);
  let leftMag = map(eyeLeftMouseDistance, 0, 400, 0, 30.0);
  let rightMag = map(eyeRightMouseDistance, 0, 400, 0, 30.0);
  let leftOffsetX = (leftDx / eyeLeftMouseDistance) * leftMag;
  let leftOffsetY = (leftDy / eyeLeftMouseDistance) * leftMag;
  let rightOffsetX = (rightDx / eyeRightMouseDistance) * rightMag;
  let rightOffsetY = (rightDy / eyeRightMouseDistance) * rightMag;

  rectMode(CENTER);
  fill(0);
  rect(eyeLeft + leftOffsetX,eyeY + leftOffsetY,10,10);
  rect(eyeRight + rightOffsetX,eyeY + rightOffsetY,10,10);
}
