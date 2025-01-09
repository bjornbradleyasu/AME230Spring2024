
let bear;
let computer;
let controller;
let film;
let jetski
let lacrosse;
let movie;
let music;
let shoes;
let spiderman;
let wallpaper;


function setup() {
  createCanvas(800, 800);
  background(70);
}

function preload() {
  
  bear = loadImage('images/bear.avif');
  computer = loadImage('images/computer.png');
  controller = loadImage('images/controller.png');
  jetski = loadImage('images/jetski.png');
  lacrosse = loadImage('images/lacrosse.png');
  movie = loadImage('images/movie.png');
  music = loadImage('images/music.webp');
  shoes = loadImage('images/shoes.png');
  spiderman = loadImage('images/spiderman.webp');
  wallpaper = loadImage('images/wallpaper.jpeg');
  nature = loadImage('images/nature.png');
}

function draw() {

  drawWallpaper();
  drawBear();
  drawComputer();
  drawController();
  drawJetSki();
  drawLacrosse();
  drawMovie();
  drawMusic();
  drawShoes();
  drawSpiderMan();
  drawNature();

}

function drawBear() {

  image(bear,0,450, 270, 370);

}
function drawComputer() {
  
  image(computer, 470, 500, 300, 300);

}
function drawController() {
  
  image(controller, 260, 620, 180, 180);

}
function drawJetSki() {
  
  image(jetski, 50, 250, 200, 200);

}
function drawLacrosse() {

  image(lacrosse, 590, 270, 200, 200);
  
}
function drawMovie() {
  
  image(movie, 0, 0, 240, 240);

}
function drawMusic() {

  image(music, 550, 0, 250, 250);
  
}
function drawShoes() {
  
  image(shoes, 360, 230, 180, 180);

}
function drawSpiderMan() {
  
  image(spiderman, 240, 400, 200, 200);

}
function drawNature() {

  image(nature, 290, 20, 200, 200);

}
function drawWallpaper() {

  image(wallpaper, 0, 0, 800, 800);

}
