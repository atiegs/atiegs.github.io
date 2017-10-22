function setup() {
  createCanvas(480, 120);
}
function windowResized() {
  centerCanvas();
}
function draw() {
  if(mouseIsPressed){
    fill(0);
  } else{
    fill(random (100), random (100), random (100));
  } 
  ellipse(mouseX,mouseY, 80, 80);
}