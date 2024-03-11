function setup() {
  createCanvas(400, 400);
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