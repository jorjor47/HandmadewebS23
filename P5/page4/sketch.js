// Random Ball Placement
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var xSpeed = (2, 7);
var ySpeed = (-7, -2);
var score = 0

var xBall2 = Math.floor(Math.random() * 280) + 65;
var yBall2 = 70;
var xSpeed2 = (1.6, 7);
var ySpeed2 = (-7, -1.6);



var w = window.innerWidth;
var h = window.innerHeight;

// Canvas


//Background


// All the paths
let paths = [];
// Are we painting?
let painting = false;
// How long until the next circle
let next = 0;
// Where are we now and where were we?
let current;
let previous;

function setup() {
  createCanvas(w, h);
  current = createVector(0,0);
  previous = createVector(0,0);
}

function draw() {
  background(200);
  
  // If it's time for a new point
  if (millis() > next && painting) {

    // Grab mouse position      
    current.x = mouseX;
    current.y = mouseY;

    // New particle's force is based on mouse movement
    let force = p5.Vector.sub(current, previous);
    force.mult(0.2);

    // Add new particle
    paths[paths.length - 1].add(current, force);
    
    // Schedule next circle
    next = millis() + random(100);

    // Store mouse values
    previous.x = current.x;
    previous.y = current.y;
  }

  // Draw all paths
  for( let i = 0; i < paths.length; i++) {
    paths[i].update();
    paths[i].display();
  }
}

// Start it up
function mousePressed() {
  next = 0;
  painting = true;
  previous.x = mouseX;
  previous.y = mouseY;
  paths.push(new Path());
}

// Stop
function mouseReleased() {
  painting = false;
}

// A Path is a list of particles
class Path {
  constructor() {
    this.particles = [];
    this.hue = random(100);
  }

  add(position, force) {
    // Add a new particle with a position, force, and hue
    this.particles.push(new Particle(position, force, this.hue));
  }
  
  // Display plath
  update() {  
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
    }
  }  
  
  // Display plath
  display() {    
    // Loop through backwards
    for (let i = this.particles.length - 1; i >= 0; i--) {
      // If we shold remove it
      if (this.particles[i].lifespan <= 0) {
        this.particles.splice(i, 1);
      // Otherwise, display it
      } else {
        this.particles[i].display(this.particles[i+1]);
      }
    }
  
  }  
}

// Particles along the path
class Particle {
  constructor(position, force, hue) {
    this.position = createVector(position.x, position.y);
    this.velocity = createVector(force.x, force.y);
    this.drag = 0.4;
    this.lifespan = 1000;
  }

  update() {
    // Move it
    this.position.add(this.velocity);
    // Slow it down
    this.velocity.mult(this.drag);
    // Fade it out
    this.lifespan--;
  }

  // Draw particle and connect it with a line
  // Draw a line to another
  display(other) {
    stroke(0, this.lifespan);
    fill(0, this.lifespan/2);    
    ellipse(this.position.x,this.position.y, 8, 8);    
    // If we need to draw a line
    if (other) {
      line(this.position.x, this.position.y, other.position.x, other.position.y);
    }
  }
}
