// sketch.js

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(random(0,255),random(0,255),random(0,255));
  
//Triangle variables
  let triBottomY = 600;
  let triTopY = 0;
  let triX = 0;
  let triWidth = 100;
  let triHeight = 70;
  let triY = 0;

//Circle Variables
  let circleX = 50;
  let circleY = 96;
  let circleD = 50;

//Line variables
  let lineX = 100;
  let lineY = 0;
  

 // Big triangles (top & bottom) 

  while (triX <= 500) {
    fill (random(0,255),random(0,255),random(0,255))
    strokeWeight(2)
    triangle (triX, triBottomY, triX+triWidth, triBottomY, triX+50, triBottomY - triHeight);
    triangle (triX, triTopY, triX+triWidth, triTopY, triX+50, triHeight);
    triX += 100;
  }
  triX = 0;


  //Outer small triangle border (left & right)
  while (triY <= 580) {
    fill (random(0,255),random(0,255),random(0,255));
    strokeWeight(0);
    triangle(triX, triY , triX, triY + 20, 15, triY+10);
    triangle(600, triY, 600, triY+20, 585, triY+ 10);
    triY += 20;
  }
  triY = 0;

  //Outer small triangle border (top & bottom)
  while (triX <= 580) {
    fill (random(0,255),random(0,255),random(0,255));
    strokeWeight(1);
    triangle(triX, 0, triX+20, 0, triX+10, 10);
    triangle(triX, 600, triX+20, 600, triX+10, 590);
    triX += 20;
  }
  triX = 0;

  //repeating circles (nested loop)
  while (circleX <= 550) {
    fill (random(0,255),random(0,255),random(0,255));
    strokeWeight(3);
    while (circleY < 505) {
      fill (random(0,255),random(0,255),random(0,255));
      ellipse (circleX, circleY, circleD, circleD);
      circleY += 51;
    }
    circleY = 96;
    ellipse(circleX,circleY, circleD, circleD);
    circleX += 100;
  }

  //Repeating lines
  while (lineX <= 500){
    fill (random(0,255),random(0,255),random(0,255))
    strokeWeight(6);
    line (lineX, lineY, lineX, lineY+600);
    lineX += 100;
  }
  strokeWeight(1);

  noLoop();
}
  
