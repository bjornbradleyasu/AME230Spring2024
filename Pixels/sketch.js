let selfie;

function preload() {
  selfie = loadImage('images/selfie.jpg'); 
}

function setup() {
  createCanvas(800, 800);
  selfie.loadPixels();
  noLoop();
}

function draw() {
  background(0);

  let gridX = 60;
  let gridY = 60;
  
  let cellWidth = selfie.width / gridX;
  let cellHeight = selfie.height / gridY;

  //image to canvas scale
  scale(width / selfie.width, height / selfie.height);

  //over each grid cell
  for (let grid_i = 0; grid_i < gridX; grid_i++) {
    for (let grid_j = 0; grid_j < gridY; grid_j++) {
      
      //starting point
      let xstart = Math.floor(grid_i * cellWidth);
      let ystart = Math.floor(grid_j * cellHeight);
      let pixelCount = 0;
      let rTotal = 0, gTotal = 0, bTotal = 0;

      // Average color
      for (let x = xstart; x < xstart + cellWidth; x++) {
        for (let y = ystart; y < ystart + cellHeight; y++) {
          let index = (y * selfie.width + x) * 4;
          rTotal += selfie.pixels[index];
          gTotal += selfie.pixels[index + 1];
          bTotal += selfie.pixels[index + 2];
          pixelCount++;
        }
      }

      let rAvg = rTotal / pixelCount;
      let gAvg = gTotal / pixelCount;
      let bAvg = bTotal / pixelCount;

      // Determine if white
      if (rAvg > 160 && gAvg > 160 && bAvg > 160) {
        // if white, draw circle
        fill(rAvg, gAvg, bAvg);
        ellipseMode(CORNER);
        ellipse(grid_i * cellWidth, grid_j * cellHeight, cellWidth+5, cellHeight+5);
      } else {
        // not white, draw rectangle
        fill(rAvg, gAvg, bAvg);
        rect(grid_i * cellWidth, grid_j * cellHeight, cellWidth, cellHeight);
      }
    }
  }
}