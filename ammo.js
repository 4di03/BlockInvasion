/// ammo.js file



var ammunition = [];
class ammo{
  constructor(){
    this.x = Math.random()*window.innerWidth;
    this.y = Math.random()*window.innerHeight;
    this.size = (15/1080)*height;
    this.bbx = new bbox(this.x, this.y, this.size, this.size);
    this.drawable = true;
    objects.push(this);
    ammunition.push(this);

    var ground = wallCollision(this.bbx, this.x, this.y+(1/1080)*height);
    if (!ground)                          // makes sure ammo spawns right above ground
      kill(this);
    this.y += -(45/1080)*height;


  }
  step(){
    if(collision(this.bbx, this.x, this.y )){
      hero.ammo +=1;
      kill(this);
    }

  }
  draw(){
    strokeColor(255, 255, 255);
    fillColor(0,0,255);
    strokeSize(2);
    rectangle(this.x, this.y, this.size, this.size);
  }
}
