///wall.js


var walls = [];

class wall {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.size = 0.01197*window.innerWidth;
    this.bbx = new bbox(this.x, this.y, this.size, this.size);
    objects.push(this);
    walls.push(this);
  }
  draw(){
    strokeColor(255, 255, 255);
    noFill();
    strokeSize(2);

    rectangle(this.x, this.y, this.size, this.size);
  }
}

function wallCollision(bbx, x, y){           
  var lastX = bbx.x1;
  var lastY = bbx.y1;
  bbx.update(x, y);
  var ret = false;
  for(var i=0; i<walls.length; i++){
      if(walls[i].bbx.collision(bbx)){
        ret = true;
        break;
      }
  }
  bbx.update(lastX, lastY);
  return ret;

}
