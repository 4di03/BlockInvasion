/// bounds.js file
//Youtube Tutorial(https://www.youtube.com/watch?v=APivt7U4WP0)


class bbox {
  constructor(x,y,w,h){
    this.x1 = x;
    this.y1 = y;
    this.w = w;
    this.h = h;
    this.x2 = x+w;
    this.y2 = y+h;

  }
  update(x, y){
    this.x1=x;
    this.y1 = y;
    this.x2 = x+this.w;
    this.y2= y+this.h;
  }
  collision(bbx){
    return (this.x1 < bbx.x2 && this.x2 > bbx.x1 && this.y1 <bbx.y2 && this.y2> bbx.y1);
  }
  draw(){
    noStroke();
    fillColor(255, 0, 0);
    rectangle(this.x1, this.y1, this.w, this.h);
  }
}
