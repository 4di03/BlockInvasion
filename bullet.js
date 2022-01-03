/// bullet.js file
var fball = new Image();
fball.src= "./Images/fireball.jpg";

var bullets = [];
class bullet{
  constructor(){
    this.x = hero.x + hero.size/2;
    this.y = hero.y + hero.size/2;
    this.size= (12/1920)*width;
    this.bbx = new bbox(this.x, this.y, 2*this.size, 2*this.size);
    this.xspd= 0;
    this.yspd = 0;
    this.drawable = true;
    objects.push(this);
    bullets.push(this);
    var itemIndex = objects.length - 1;
  }



  step(){

    this.x += this.xspd;
    this.y += this.yspd;
    if(bcollision(this.bbx, this.x, this.y)) {
      
      
      kill(this);
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

    
    
  }
}
