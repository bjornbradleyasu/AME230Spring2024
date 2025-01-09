// sketch.js

function setup() {
  createCanvas(600, 600);
}

// check if mouse is over given rectangle
function mouseOver(x, y, w, h) {
  return mouseX >= x && mouseX < x + w && mouseY >= y && mouseY < y + h;
}

let isAChanged = false;
let isBChanged = false;
let isCChanged = false;

function draw() {
  background(130, 130, 130);

  let boxHeight = 85;
  let boxWidth = 85;
  let boxY = 250;
  let boxX = 60;
  let boxGap = 50;

  let boxBX = boxX + boxWidth + boxGap;
  let boxCX = boxBX + boxWidth + boxGap;
  let boxDX = boxCX + boxWidth + boxGap;

  
  let mouseInA = mouseOver(boxX, boxY, boxWidth, boxHeight);
  let mouseInB = mouseOver(boxBX, boxY, boxWidth, boxHeight);
  let mouseInC = mouseOver(boxCX, boxY, boxWidth, boxHeight);
  let mouseInD = mouseOver(boxDX, boxY, boxWidth, boxHeight);

  if (mouseInA) {
    isAChanged = true;
  }
  if (mouseInB && isAChanged) {
    isBChanged = true;
  }
  if (mouseInC && isBChanged) {
    isCChanged = true;
  }
  if (mouseInD) {
    isAChanged = isBChanged = isCChanged = false;
  }

  
  strokeWeight(5);

// Box A: Red if changed
  fill(isAChanged ? 255 : 255, isAChanged ? 0 : 255, isAChanged ? 0 : 255);
  rect(boxX, boxY, boxWidth, boxHeight);

// Box B: Green if changed
  fill(isBChanged ? 0 : 255, isBChanged ? 255 : 255, isBChanged ? 0 : 255);
  rect(boxBX, boxY, boxWidth, boxHeight);

// Box C: Blue if changed
  fill(isCChanged ? 0 : 255, isCChanged ? 0 : 255, isCChanged ? 255 : 255);
  rect(boxCX, boxY, boxWidth, boxHeight);

// Shape D remains unchanged (white)
  fill(255);
  rect(boxDX, boxY, boxWidth, boxHeight);
}
