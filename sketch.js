// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let walker;

function setup() {
  createCanvas(640, 640); // creating canvas of size 640 x 240
  walker = new Insect(); // creating an instance/object of class Insect
  background(255);
}

function draw() {
  walker.step();
  background(255);
  walker.show();
}

class Insect {
  constructor() {
    this.tx = 0;
    this.ty = 10000;
  }

  step() {
    //{!2} x- and y-position mapped from noise
    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, height);

    //{!2} Move forward through “time.”
    this.tx += 0.01;
    this.ty += 0.01;
  }

  show() {
    strokeWeight(2);
    fill(0);
    stroke(0);
    circle(this.x, this.y, 10);
  }
}
