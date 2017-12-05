function Snek() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
  
    this.eat = function(pos) {
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total++;
        return true;
      } else {
        return false;
      }
    }
  
    this.dir = function(x, y) {
      this.xspeed = x;
      this.yspeed = y;
    }
  
    this.update = function() {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
      if (this.total >= 1) {
        this.tail[this.total - 1] = createVector(this.x, this.y);
      }
  
      this.x = this.x + this.xspeed * chub;
      this.y = this.y + this.yspeed * chub;
  
      this.x = constrain(this.x, 0, width - chub);
      this.y = constrain(this.y, 0, height - chub);
    }
  
    this.show = function() {
      fill(0, 0, 0);
      for (var i = 0; i < this.tail.length; i++) {
        ellipse(this.tail[i].x, this.tail[i].y, chub, chub);
      }
      ellipse(this.x, this.y, chub, chub);
  
    }
  }
  var s;
var chub = 15;

var food;

function setup() {
  createCanvas(600, 600);
  s = new Snek();
  frameRate(10);
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
  background(51);

  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();


  fill(255, 0, 100);
  rect(food.x, food.y, chub, chub);
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