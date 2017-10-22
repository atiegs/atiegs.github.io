function setup() {
  createCanvas(500,500);
}
function windowResized() {
  centerCanvas();
}
function draw() {
  if(mouseIsPressed){
    fill(255, 255, 0);
  } else{
    fill(255, 255, 0);
  } 
  triangle(mouseX,mouseY, 250, 250);
}