

var w = window.innerWidth;
var h = window.innerHeight;

var angle = 2.0;
var offset = 750;
var scalar = 3.5;
var speed = 0.4;
var col = {
  r: 255,
  g: 0,
  b: 0
};

function setup() { 
  createCanvas(w, h);
  noStroke();
  background (0);
} 

function draw() { 
  col.r = random(0, 200);
  col.g = random(0, 250);
  col.b = random(100, 250);
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;
  fill(col.r, col.g, col.b);
  noStroke();
  text("7", x, y);
  angle += speed;
  scalar += speed;
  
}