//player.js


class player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 64;
    this.hp = 5;
    this.bbx = new bbox(this.x, this.y, this.size, this.size);

    //physics
    this.gravity = 5;
    this.yspd =0;
    this.jspd = 60;
    this.mspd = 10;
    this.xspd = 0;
    this.ammo = 5;
    this.drawable = true;
    objects.push(this);

  }
  step(){
    //this.x = mouseX;
    //this.y = mouseY;
    if (this.yspd < 40)
    this.yspd += this.gravity;
    var ground = wallCollision(this.bbx, this.x, this.y+1);
    if(keyPress.W && ground) this.yspd = -this.jspd;


    if(wallCollision(this.bbx, this.x, this.y +this.yspd)) {
    while(!wallCollision(this.bbx, this.x, this.y + Math.sign(this.yspd))){      //Youtube Tutorial(https://www.youtube.com/watch?v=APivt7U4WP0)
      this.y += Math.sign(this.yspd);
    }
    this.yspd=0;
  }
    this.y += this.yspd

    this.bbx.update(this.x,this.y);
    var d = keyDown.D - keyDown.A;
    this.xspd = d* this.mspd;

    if(wallCollision(this.bbx, this.x +this.xspd, this.y )) {
      while(!wallCollision(this.bbx, this.x + Math.sign(this.xspd), this.y)){   //Youtube Tutorial(https://www.youtube.com/watch?v=APivt7U4WP0)
        this.x += Math.sign(this.xspd);
      }
      this.xspd=0;
    }

    this.x += this.xspd;


  }
  draw(){
    strokeColor(0, 255, 0);
    noFill();
    rectangle(this.x, this.y, this.size, this.size);
    fillColor(0,255,0);
    rectangle(this.x+10, this.y+20,10, 3);
    fillColor(0,255,0);
    rectangle(this.x + 45, this.y+20,10, 3);
    circle(this.x+32, this.y+45, 10)
    noFill();
    line()

  }
}


function collision(bbx, x, y){
  var lastX = bbx.x1;
  var lastY = bbx.y1;
  bbx.update(x, y);
  var ret = false;
  if(hero.bbx.collision(bbx)){
    ret = true;


  }
  bbx.update(lastX, lastY);
  return ret;
}
