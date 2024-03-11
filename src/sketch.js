function setup() {
  createCanvas(400, 400);
}

function drawBackground() {
  // Yellow wall
  fill(229, 209, 132); // Yellow color
  rect(0, 0, width, height * 2.0); // Wall occupies 80% of the canvas height

  // Brown floor
  fill(139, 69, 19); // Brown color
  let floorY = ratY + 20; // Adjusted position of the floor
  rect(0, floorY, width, height - floorY); // Floor positioned slightly below the rat
}

function drawCat(x, y) {
  // Cat body
  fill(255, 165, 0); // Orange color
  ellipse(x, y, 80, 60);

  // Cat head
  fill(255, 165, 0); // Orange color
  ellipse(x + 40, y - 20, 50, 50);

  // Cat ears 
  fill(255, 165, 0); // Orange color
  triangle(x + 20, y - 40, x + 30, y - 60, x + 40, y - 40);
  triangle(x + 60, y - 40, x + 50, y - 60, x + 40, y - 40);

  // Cat eyes
  fill(0);
  ellipse(x + 30, y - 20, 10, 10);
  ellipse(x + 50, y - 20, 10, 10);

  // Nose
  push();
  translate(x + 36, y - 5);
  rotate(PI); // Rotate by 180 degrees 
  scale(0.7);
  fill(255, 192, 203); // Pink color
  triangle(-5, -5, -10, 5, 0, 5);
  pop();

  // Cat tail
  fill(255, 165, 0); // Orange color
  rect(x - 65, y - 15, 30, 10); //orange rectangle

  // Cat legs
  fill(255, 165, 0); // Orange color
  rect(x - 30, y + 10, 15, 30);
  rect(x + 15, y + 10, 15, 30);
}

function drawRat(x, y) {
  // Rat body
  fill(128); // Gray color
  ellipse(x, y, ratSize, ratSize);

  // Rat ears
  fill(128); // Gray color
  ellipse(x + ratSize * 0.25, y - ratSize * 0.25, ratSize * 0.5, ratSize * 0.5); // Right ear
  ellipse(x - ratSize * 0.25, y - ratSize * 0.25, ratSize * 0.5, ratSize * 0.5); // Left ear

  // Rat snout
  fill(255, 192, 203); // Pink color
  ellipse(x + ratSize * 0.4, y - ratSize * 0.1, ratSize * 0.3, ratSize * 0.2); // Snout

  // Rat whiskers
  stroke(0); // Black color
  line(x + ratSize * 0.4, y, x + ratSize * 0.6, y - ratSize * 0.1); // Whisker 1
  line(x + ratSize * 0.4, y, x + ratSize * 0.6, y); // Whisker 2
  line(x + ratSize * 0.4, y, x + ratSize * 0.6, y + ratSize * 0.1); // Whisker 3
}