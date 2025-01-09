
let keys = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m', ' '];
let keysTyped = [];
let linesOfText = [''];
let keyX = [];
let keyY = [];
let selectedKey = '';
let locX = 30;
let locY = 410;

function setup() {
  createCanvas(620, 620);
}

function draw() {
  background(200);
  let xOffset = 0;
  let spacer = 7;
  keyX = [];
  keyY = [];

  locX = 30;
  locY = 375;

  drawScreen();
  drawKeyboard();

  for (let i = 0; i < keys.length; i++) {
    if (i == 10 || i == 19 || i == 26) {
      xOffset = 0;
      locY += 60;
      if (i == 10) locX = 60;
      if (i == 19) locX = 90;
      if (i == 26) locX = 260;
    }
    let keyObj = new Key(keys[i], locX + xOffset, locY);
    keyObj.render();

    keyX.push(locX+xOffset);
    keyY.push(locY);

    xOffset += 50 + spacer;
  }
  
  if (selectedKey !== '') {
    fill(0);
    textSize(38);
    text(selectedKey,555, 357);
  }

  simplifiedCursor();
  displayTypedKeys();

}

class Key {

  constructor (letter, locX, locY) {
    this.letter = letter;
    this.locX = locX;
    this.locY = locY
  }

  render() {
    push ();
    fill(224, 193, 166);
    noStroke();
    rect (this.locX, this.locY, 50, 50);
    fill (0);
    if (this.letter === ' ') { 
      textSize(35); 
      textAlign(CENTER, CENTER);
      text('space', this.locX + 25, this.locY + 20); 
    } else {
      textSize(38);
      text(this.letter, this.locX + 15, this.locY + 35);
    }
    pop ();
  }
}

  function drawKeyboard() {
    strokeWeight(5);
    fill(224, 193, 166);
    rect(25, 370, 575, 240);
  }

  function drawScreen() {
    let screenX = 10;
    let screenY = 10;
    let screenW = 605;
    let screenH = 350;

    strokeWeight(3);
    fill(16, 163, 21);
    rect (screenX, screenY, screenW, screenH);
    fill(40);
    rect (screenX+10, screenY+10, screenW-20, screenH-20);

  }

  function collectInput() {

    for (let i = 0; i < keys.length; i++) {
      if (mouseX > keyX[i] && mouseX < keyX[i] + 50 && mouseY > keyY[i] && mouseY < keyY[i] + 50) {
        fill(255);
        textSize(38);
        text(keys[i],556, 358);

        append(keysTyped, keys[i]);
        break;
        }
      }
  }

  function mousePressed() { 
    for (let i = 0; i < keys.length; i++) {
      if (mouseX > keyX[i] && mouseX < keyX[i] + 50 && mouseY > keyY[i] && mouseY < keyY[i] + 50) {
        let currentLineIndex = linesOfText.length - 1;
        linesOfText[currentLineIndex] += keys[i];
        break;
      }
    }
  }

  function simplifiedCursor() {
    let cursorX = 35;
    let baseCursorY = 40;
    let lineSpacing = 35;

    let currentLine = linesOfText.length - 1;
    let cursorY = baseCursorY + (currentLine * lineSpacing);

    let sec = second();
  
    push();
    noStroke();
    fill(12, 173, 23);
    if (sec % 2 != 0) {
      triangle(cursorX, cursorY, cursorX, cursorY + 20, cursorX + 20, cursorY + 10);
    }
    pop();
  }


  function displayTypedKeys() {
    let startX = 70;
    let startY = 60;
    let lineSpacing = 35;

    noStroke();

    fill(12, 173, 23);
    textSize(35);

    for (let i = 0; i < linesOfText.length; i++) {
      text(linesOfText[i], startX, startY + i * lineSpacing);
    }
  }

  function keyPressed() {
    if (keyCode === BACKSPACE) {
      let currentLineIndex = linesOfText.length - 1;
      if (linesOfText[currentLineIndex].length > 0) {
        linesOfText[currentLineIndex] = linesOfText[currentLineIndex].substring(0, linesOfText[currentLineIndex].length - 1);
      } else if (linesOfText.length > 1) { 
        linesOfText.pop();
      }
    } else if (keyCode === ENTER) {
      linesOfText.push('');
    }
  }

