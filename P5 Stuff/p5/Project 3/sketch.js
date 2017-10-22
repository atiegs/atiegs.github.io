var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(300, 300);
  centerCanvas();
  background(300,345, 134);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  fill(125,100,220, 255);

  for (let x = 0; x <= 300; x += 1) {
    fill(x + 10, x * 10, x * 20, 100);
    triangle(x, x + 1, x * 1, 1);
  }
}