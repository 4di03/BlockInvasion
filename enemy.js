// enemy.js


/*window.onload = function(){
var enemy = new Image();
enemy.src = "enemy.png";
for (var b=0; b<enemies.length; b++)
  ctx.drawImage(enemies[b], enemies[b].x, enemies[b].y, enemies[b].size, enemies[b].size);
}#*/
var enemyImg = new Image()
enemyImg.src = "./Images/enemy.jpg"

var deathImg = new Image()
deathImg.src = "./Images/explode.png"


function bcollision(bbx, x, y){
  var lastX = bbx.x1;
  var lastY = bbx.y1;
  bbx.update(x, y);
  var ret = false;
for(var n = 0; n<enemies.length; n++){
  enemies[n].bbx.update(enemies[n].x, enemies[n].y);
  if(enemies[n].bbx.collision(bbx) && enemies[n].drawable){
      ret = true;
      kill(enemies[n]);
    
  }

}
  bbx.update(lastX, lastY);
  return ret;
}

class enemy{
  constructor(){
    this.x =0 + ((Math.round(Math.random()))*window.innerWidth);//either spawns enemys at the left or right side of screen
    this.y= Math.random() * window.innerHeight;
    this.size= (Math.random() * (42/1920)*width) + (12/1920)*width;
    this.bbx = new bbox(this.x, this.y, this.size, this.size);
    this.xspd = 0//(Math.random() < 0.5 ? -1 : 1)* Math.random() * 12;
    this.yspd = 0//(Math.random() < 0.5 ? -1 : 1) * Math.random() * 12;
    this.distx = hero.x - this.x; // gets x distance from player
    this.disty = hero.y- this.y; // gets y distance from player
    this.xspd =this.distx/((Math.random() * 200) + 50); //makes enemies move in x-direction of player at random speed
    this.yspd =this.disty/((Math.random() * 200) + 50); //makes enemies move in y-direction of player at random speed
    this.drawable = true;
    
    objects.push(this);
    enemies.push(this);
  }
  step(){
    if (this.drawable){
    this.x += this.xspd;
    this.y += this.yspd;
 
    if(collision(this.bbx, this.x, this.y, this.drawable)) {
      hero.hp += -1;
      
      
      kill(this);
      console.log("hero hurt");
      
    }
    

  }
}


  draw(){
    /*fillColor(255,0,0);
    noStroke();
    rectangle(this.x,this.y,this.size, this.size);
*/     

    if (this.drawable){
    ctx.drawImage(enemyImg, this.x , this.y, this.size, this.size);
    }else{
      ctx.drawImage(deathImg, this.x - (2 * this.size), this.y - (2 * this.size), 4* this.size, 4*this.size);
      this.xspd = 0;
      this.yspd = 0;

      if(this.size <= 0){
        this.size = 0;
      }else{

      this.size -= 1;
      }
  }   

  }

}
