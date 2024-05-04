// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let insect;

function setup() {
  createCanvas(640, 640);
  insect = new Insect();
  background(255);
}

function draw() {
  insect.update();
  background(255);
  insect.checkEdges();
  insect.show();
}
