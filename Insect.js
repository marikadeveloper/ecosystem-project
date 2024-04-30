class Insect {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.topSpeed = 5;
    this.tx = 0;
    this.ty = 10000;
  }

  update() {
    // use perlin noise to determine acceleration
    this.acceleration.x = map(noise(this.tx), 0, 1, 0, width);
    this.acceleration.y = map(noise(this.ty), 0, 1, 0, height);
    // subtract current position from acceleration to mitigate the effect of the acceleration on the insect
    this.acceleration.sub(this.position);

    // update velocity
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topSpeed);
    this.position.add(this.velocity);

    // increment time
    this.tx += 0.01;
    this.ty += 0.01;
  }

  show() {
    strokeWeight(2);
    fill(0);
    stroke(0);
    circle(this.position.x, this.position.y, 10);
  }

  checkEdges() {
    if (this.position.x > width) {
      // if the insect goes off the right edge, it reverses x direction
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      // if the insect goes off the left edge, it reverses x direction
      this.velocity.x *= -1;
    }

    if (this.position.y > height) {
      // if the insect goes off the bottom edge, it reverses y direction
      this.velocity.y *= -1;
    } else if (this.position.y < 0) {
      // if the insect goes off the top edge, it reverses y direction
      this.velocity.y *= -1;
    }
  }
}
