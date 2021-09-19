// enemy.js

function kill(object){
  object.size = 0;
  object.x = -122;
  object.y = -122;
  object.xspd = 0;
  object.yspd = 0;
}

/*window.onload = function(){
var enemy = new Image();
enemy.src = "enemy.png";
for (var b=0; b<enemies.length; b++)
  ctx.drawImage(enemies[b], enemies[b].x, enemies[b].y, enemies[b].size, enemies[b].size);
}#*/

class enemy{
  constructor(){
    this.x =0 + ((Math.round(Math.random()))*window.innerWidth);//either spawns enemys at the left or right side of screen
    this.y= Math.random() * window.innerHeight;
    this.size= (Math.random() *42) + 12;
    this.bbx = new bbox(this.x, this.y, this.size, this.size);
    this.xspd = 0//(Math.random() < 0.5 ? -1 : 1)* Math.random() * 12;
    this.yspd = 0//(Math.random() < 0.5 ? -1 : 1) * Math.random() * 12;
    this.distx = hero.x - this.x; // gets x distance from player
    this.disty = hero.y- this.y; // gets y distance from player
    this.xspd =this.distx/((Math.random() * 200) + 50); //makes enemies move in x-direction of player at random speed
    this.yspd =this.disty/((Math.random() * 200) + 50); //makes enemies move in y-direction of player at random speed

    objects.push(this);
    enemies.push(this);
  }
  step(){
    this.x += this.xspd;
    this.y += this.yspd;
    if(collision(this.bbx, this.x, this.y + this.yspd)) {
      hero.hp += -1;
      kill(this);
      console.log("hero hurt");
    }

  }
  


  draw(){
    fillColor(255,0,0);
    noStroke();
    rectangle(this.x,this.y,this.size, this.size);


  }

}

function bcollision(bbx, x, y){
  var lastX = bbx.x1;
  var lastY = bbx.y1;
  bbx.update(x, y);
  var ret = false;
for(var n = 0; n<enemies.length; n++){
  enemies[n].bbx.update(enemies[n].x, enemies[n].y);
  if(enemies[n].bbx.collision(bbx)){
      ret = true;
      kill(enemies[n]);
  }

}
  bbx.update(lastX, lastY);
  return ret;
}
