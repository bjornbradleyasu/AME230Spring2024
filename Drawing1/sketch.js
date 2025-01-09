// sketch.js

function setup() {
  createCanvas(600, 600);

}

function draw() {

  let noFaceX = 0;
  let noFaceY = 0;
  //if a key is pressed then the picture disappears
  if (keyIsPressed == true) {
    noFaceY = 590;
  } else {
    noFaceY = 0;
  }

  let red = 0;
  let green = 0;
  let blue = 0;

  //if mouse is pressed then the background changes to a random color
  if (mouseIsPressed == true) {
    red = random(0,255)
    green = random(0,255)
    blue = random(0,255)
    background(red,green,blue);
  } else {
    background(132, 162, 191);
  }

  
  fill(0,0,0);

  arc(300+noFaceX, 600+noFaceY, 550, 1130, PI, 0);

  //head
  fill(255,255,255);
  ellipse(300 + noFaceX, 310 + noFaceY, 380, 500)

  //eyes
  //ellipse(x, y, w, [h])
  
  //if mouse is held over eyes then change to red
  if (((mouseX > 320+noFaceX) && (mouseX < 480+noFaceX) && (mouseY > 210+noFaceY) && (mouseY < 290+noFaceY)) || ((mouseX > 120+noFaceX) && (mouseX < 280+noFaceX) && (mouseY > 210+noFaceY) && (mouseY < 290+noFaceY))){
    fill(181, 33, 31)
  } else {
    fill(0)
  }

  ellipse(400+noFaceX, 250+noFaceY, 80, 40);
  ellipse(200+noFaceX, 250+noFaceY, 80, 40);

  ellipse(400+noFaceX, 300+noFaceY, 60, 12);
  ellipse(200+noFaceX, 300+noFaceY, 60, 12);

  //face markings
  //triangle(x1, y1, x2, y2, x3, y3)
  fill(115,90,150);

  triangle(370+noFaceX, 215+noFaceY, 430+noFaceX, 215+noFaceY, 400+noFaceX, 140+noFaceY);
  triangle(170+noFaceX, 215+noFaceY, 230+noFaceX, 215+noFaceY, 200+noFaceX, 140+noFaceY);

  triangle(375+noFaceX, 320+noFaceY, 425+noFaceX, 320+noFaceY, 400+noFaceX, 450+noFaceY);
  triangle(175+noFaceX, 320+noFaceY, 225+noFaceX, 320+noFaceY, 200+noFaceX, 450+noFaceY);
  
  
  //mouth
  fill(0,0,0);
  
  //if mouse is held over mouth then close mouth
  if ((mouseX > 180+noFaceX) && (mouseX < 420+noFaceX) 
  && (mouseY > 480+noFaceY) && (mouseY < 500+noFaceY)){
    ellipse(300+noFaceX, 490+noFaceY, 120, 10)
  } else {
    ellipse(300+noFaceX, 490+noFaceY, 120, 40)
  }

}
