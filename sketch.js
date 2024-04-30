// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let insect;

function setup() {
  createCanvas(640, 640); // creating canvas of size 640 x 240
  insect = new Insect(); // creating an instance/object of class Insect
  background(255);
}

function draw() {
  insect.update();
  background(255);
  insect.checkEdges();
  insect.show();
}
