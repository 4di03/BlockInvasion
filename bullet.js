/// bullet.js file


var bullets = [];
class bullet{
  constructor(){
    this.x = hero.x;
    this.y = hero.y;
    this.size= 12;
    this.bbx = new bbox(this.x, this.y, 2*this.size, 2*this.size);
    this.xspd= 0;
    this.yspd = 0;


    objects.push(this);

  }



  step(){

    this.x += this.xspd;
    this.y += this.yspd;
    if(bcollision(this.bbx, this.x, this.y + this.yspd)) {
      kill2(this);
      hero.hp +=1;

      console.log("hit");

    }

  }
  draw(){
    strokeColor(0, 0, 0);
    fillColor(253,173,92);
    circle(this.x,this.y,this.size);
  }
}
function kill2(entity){
  entity.size = 0;
  entity.x = -222;
  entity.y = -222;
  entity.xspd = 0;
  entity.yspd = 0;
}
