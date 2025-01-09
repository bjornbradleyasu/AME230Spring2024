let playButton;
let pauseButton;
let loopButton;
let sound;
let backgroundImage;

let playButtonX = 190;
let playButtonY = 180;
let playButtonWidth = 200;
let playButtonHeight = 200;
let loopButtonX = 40;
let loopButtonY = 240;
let loopButtonWidth = 100;
let loopButtonHeight = 100;
let dragging = false;
let volumeKnobY = 390;
let progressBarWidth = 420;
let isPlaying = false;
let isLooping = false;

function preload() {
  playButton = loadImage('playbutton.png');
  pauseButton = loadImage('pausebutton.png');
  loopButton = loadImage('loopbutton.png');
  sound = loadSound('sound.mp3');
  backgroundImage = loadImage('background.jpeg');
}

function setup() {
  createCanvas(600, 600);
  sound.setLoop(false);
}

function draw() {
  background(100);
  image(backgroundImage, 0, 220);
  push();
  angleMode(DEGREES);
  imageMode(CENTER);
  rotate(180);
  image(backgroundImage, -300, -180);
  pop();

  
  makePlayButton();
  makeLoopButton();
  updateProgressBar();
  makeVolumeBar();
}

function makePlayButton() {
  if (isPlaying) {
    image(pauseButton, playButtonX, playButtonY, playButtonWidth, playButtonHeight);
  } else {
    image(playButton, playButtonX, playButtonY, playButtonWidth, playButtonHeight);
  }
}

function makeLoopButton() {
  push ();
  if (isLooping) {
    tint(0, 250);
  } else {
    tint(80, 80);
  }
  image(loopButton, loopButtonX, loopButtonY, loopButtonWidth, loopButtonHeight);
  pop ();
}
function makeVolumeBar() {
  push();
  fill(100);
  let volumeBarX = 470;
  let volumeBarHeight = 220;
  rect(volumeBarX, 180, 10, volumeBarHeight, 20);
  volumeKnobY = constrain(volumeKnobY, 180, 180 + volumeBarHeight);
  pop();
  push();
  fill(0, 200, 0);
  circle(volumeBarX + 5, volumeKnobY, 25);
  pop();
}

function updateProgressBar() {
  let progressX = 80;
  let progressY = 470;
  let progressBarHeight = 10;
  rect(progressX, progressY, progressBarWidth, progressBarHeight, 20); 
  if (sound.isPlaying()) {
    let playHead = map(sound.currentTime(), 0, sound.duration(), 0, progressBarWidth);
    fill(0, 200, 0);
    rect(progressX, progressY, playHead, progressBarHeight, 20);
  }
  fill(80);
}

function mousePressed() {
  if (mouseX >= playButtonX && mouseX <= playButtonX + playButtonWidth &&
      mouseY >= playButtonY && mouseY <= playButtonY + playButtonHeight) {
    togglePlayPause();
  }
  if (mouseX >= loopButtonX && mouseX <= loopButtonX + loopButtonWidth &&
      mouseY >= loopButtonY && mouseY <= loopButtonY + loopButtonHeight) {
    toggleLoop();
  }
  if (dist(mouseX, mouseY, 475, volumeKnobY) < 12.5) {
    dragging = true;
  }
}

function togglePlayPause() {
  if (isPlaying) {
    sound.pause();
    isPlaying = false;
  } else {
    sound.play();
    isPlaying = true;
  }
}

function toggleLoop() {
  isLooping = !isLooping;
  sound.setLoop(isLooping);
}

function mouseDragged() {
  if (dragging) {
    volumeKnobY = mouseY;
    let volumeLevel = map(volumeKnobY, 400, 180, 0, 1);
    sound.setVolume(volumeLevel);
  }
}

function mouseReleased() {
  dragging = false;
}
