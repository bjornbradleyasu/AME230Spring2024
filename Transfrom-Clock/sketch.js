// sketch.js

let sun;
let earth;
let moon;
let stars;

let sunX = 225;
let sunY = 200;
let sunSize = 250;

let earthX;
let earthY;
let earthSize = 100;

function preload() {
  sun = loadImage('images/sun.png');
  earth = loadImage('images/earth.png');
  moon = loadImage('images/moon.webp');
  stars = loadImage('images/stars.jpeg');
}

function setup() {
  createCanvas(700, 700);

}

function draw() {
  background(128);

  drawStars();
  
  drawSun();
  drawEarth();
  drawMoon();

}

function drawStars() {

  image(stars, 0, 0, 700, 700);

}


function drawSun() {

  let sec = second();

  angleMode(DEGREES);
  let angle = map(sec, 0, 59, 0, 360);

  push(); 
  translate(sunX + sunSize / 2, sunY + sunSize / 2); 
  rotate(angle);
  image(sun, -sunSize / 2, -sunSize / 2, sunSize, sunSize);
  pop();

}

function drawEarth() {
  let min = minute(); 
  let orbitRadius = 250;

  angleMode(DEGREES);
  let angle = map(min, 0, 60, 0, 360); 

  earthSize = 100;

  earthX = sunX + sunSize / 2 + orbitRadius * cos(angle) - earthSize / 2;
  earthY = sunY + sunSize / 2 + orbitRadius * sin(angle) - earthSize / 2; 

  image(earth, earthX, earthY, earthSize, earthSize);
}

function drawMoon() {

  let hr = hour();
  let orbitRadius = 90;

  angleMode(DEGREES);
  let angle = map(hr, 0, 23, 0, 360);

  let moonSize = 50;

  let moonX = earthX + earthSize / 2 + orbitRadius * cos(angle) - moonSize / 2;
  let moonY = earthY + earthSize / 2 + orbitRadius * sin(angle) - moonSize / 2;

  image(moon, moonX, moonY, moonSize, moonSize);

}