var s;
var chub = 50;

var food;

function setup() {
  createCanvas(1000, 500);
  s = new Snek();
  frameRate(9);
  pickLocation();

}

function pickLocation() {
  var cols = floor(width/chub);
  var rows = floor(height/chub);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(chub);
}

function mousePressed() {
  s.total++;
}

function draw() {
  background(128, 0, 0);

  if (s.eat(food)) {
    pickLocation();
  }
  s.update();
  s.show();


  fill(0, 0, 255);
  ellipse(food.x, food.y, chub, chub);
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}