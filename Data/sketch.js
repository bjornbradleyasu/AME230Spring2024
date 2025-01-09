// sketch.js

let table;
let sunnySkies;
let years = [];
let temperatures = [];
let year;
let temp;

let graphX = 130;
let graphY = 185;

let graphW = 800;
let graphH = 600;

function preload() {
  table = loadTable('data.csv', 'csv', 'header', collectData);
  sunnySkies = loadImage('sunnyskies.jpeg');
}

function setup() {
  createCanvas(1000, 900);
}

function draw() {
  background(128);

  image (sunnySkies, 0, 0, 1000, 900);

  drawHeader();
  drawGraph();
  plotData();

  // Only display line if the mouse is in graph area
  if (mouseX > graphX && mouseX < graphX + graphW && mouseY > graphY && mouseY < graphY + graphH) {
    displayLine();
  }
}

function drawGraph() {

  push ();
  strokeWeight(3);
  fill(220, 220, 220);
  rect(graphX, graphY, graphW, graphH, 6);
  pop ();

  //Display X & Y axis
  push ();
  stroke('black');
  strokeWeight(5);
  line(graphX, graphY, graphX, graphY+graphH);
  line(graphX, graphY+graphH, graphX+graphW, graphY+graphH);
  pop ();

  let minYear = min(years);
  let maxYear = max(years);
  let minTemp = floor(min(temperatures));
  let maxTemp = ceil(max(temperatures));

  // Display numbers on Y axis
  push ();
  stroke('black');
  strokeWeight(3);
  textSize(20);
  textAlign(RIGHT, CENTER);
  for (let i = minTemp; i <= maxTemp; i++) {
    if (i % 1 === 0) {
      let y = map(i, minTemp, maxTemp, graphY + graphH, graphY);
      push (); fill('black'); strokeWeight (1); text(i.toFixed(1) + "°", graphX - 30, y); pop();
      line(graphX - 15, y, graphX + 15, y);
    }
  }
  pop();
  push();
  stroke('black');
  strokeWeight(2);
  // Display minor ticks on Y axis
  for (let i = minTemp; i <= maxTemp; i += 0.1) {
    if (i % 1 !== 0) {
      let y = map(i, minTemp, maxTemp, graphY + graphH, graphY);
      line(graphX - 7, y, graphX + 7, y);
    }
  }
  pop();
  // Display numbers on X axis (years)
  textAlign(CENTER, TOP);
  for (let i = minYear; i <= maxYear; i++) {
    let x = map(i, minYear, maxYear, graphX, graphX + graphW);
    if (i % 10 === 0 || i == minYear) {  // major tick mark
      push();
      stroke('black');
      strokeWeight(3);
      textSize(20);
      push(); fill('black'); strokeWeight(1); text(i, x, graphY + graphH + 30); pop();
      line(x, graphY + graphH - 15, x, graphY + graphH + 15);  // Longer tick mark for each decade
      pop()
    } else {
      push();
      stroke('black');
      strokeWeight(2);
      line(x, graphY + graphH -7, x, graphY + graphH + 7);  // Shorter tick mark for each year
      pop();
    }
  }
}

function collectData() {
  for (let r = 0; r < table.getRowCount(); r++) {
    year = int(table.getString(r, 0).substring(0, 4));
    temp = table.getNum(r, 1);
    years.push(year);
    temperatures.push(temp);
  }
}

function plotData() {
  stroke('red');
  noFill();
  
  let previousX = 0;
  let previousY = 0;

  for (let i = 0; i < years.length; i++) {
    strokeWeight(8);
    let x = map(years[i], min(years), max(years), graphX, graphX + graphW);
    let y = map(temperatures[i], min(temperatures), max(temperatures), graphY + graphH, graphY);
    point(x, y);
  
    if (i > 0) {
      push();
      strokeWeight(3);
      line(previousX, previousY, x, y);
      pop();
    }
  previousX = x;
  previousY = y;
  }
}

function displayLine() {
  push();
  stroke('blue');
  strokeWeight(2); 
  line(mouseX, graphY, mouseX, graphY + graphH);
  pop();

  // Calculate the closest year and temperature to the mouseX
  let hoveredYear = int(map(mouseX, graphX, graphX + graphW, min(years), max(years)));
  let hoveredTemp = map(mouseX, graphX, graphX + graphW, min(temperatures), max(temperatures));
  
  // Draw Temp Text Box and Text
  push();
  stroke('black');
  strokeWeight(3);
  fill(220, 220, 220);
  rect(mouseX - 80, graphY - 55, 160, 40, 8);
  fill('black');
  textSize(18);
  textAlign(CENTER, CENTER);
  strokeWeight(1); text("Avg Temp:  " + hoveredTemp.toFixed(1) + "°", mouseX, graphY - 35);
  pop();

  // Draw Year Text Box and Text
  push();
  stroke('black');
  strokeWeight(3);
  fill(220, 220, 220);
  rect(mouseX - 70, graphY + graphH + 60, 140, 40, 8);
  fill('black');
  textSize(18);
  textAlign(CENTER, CENTER);
  strokeWeight(1); text("Year: " + hoveredYear, mouseX, graphY + graphH + 80);
  pop();

  // Draw triangles for the text boxes
  push();
  stroke('black');
  strokeWeight(2);
  fill('blue');
  triangle(mouseX - 8, graphY - 12, mouseX, graphY, mouseX + 8, graphY - 12);
  triangle(mouseX - 12, graphY+graphH + 56, mouseX, graphY+graphH + 5, mouseX + 12, graphY+graphH + 56);
  pop();
}

function drawHeader() {

  push();
  stroke('black');
  strokeWeight(4);
  fill(220, 220, 220);
  rect(graphX, graphY-165, graphW, 100, 20);
  pop();
  push();
  fill('black');
  stroke('black');
  strokeWeight(1);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Phoenix, AZ Average Temperature (January-December)", graphX, graphY-165, graphW, 100);

}