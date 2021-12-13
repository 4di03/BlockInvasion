/// bullet.js file
var fball = new Image();
fball.src= "./Images/fireball.jpg";

var bullets = [];
class bullet{
  constructor(){
    this.x = hero.x;
    this.y = hero.y;
    this.size= (12/1920)*width;
    this.bbx = new bbox(this.x, this.y, 2*this.size, 2*this.size);
    this.xspd= 0;
    this.yspd = 0;
    this.drawable = true;
    objects.push(this);
    var itemIndex = objects.length - 1;
  }



  step(){

    this.x += this.xspd;
    this.y += this.yspd;
    if(bcollision(this.bbx, this.x, this.y + this.yspd)) {
      kill(objects, this.itemIndex);
      hero.hp +=1;

      console.log("hit");


      
    }

  }
  draw(){
    strokeColor(0, 0, 0);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size,  2 * Math.PI, false);
    ctx.fillStyle = "rgb(253,173,92)";
    ctx.fill();
    ctx.closePath();
    /*ctx.clip();
    ctx.drawImage(fball, 0 , 0);
    ctx.restore();*/
  }
}
/*function kill2(entity){
  entity.size = 0;
  entity.x = -222;
  entity.y = -222;
  entity.xspd = 0;
  entity.yspd = 0;
}*/
