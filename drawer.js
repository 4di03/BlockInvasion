///drawer.js
//Youtube Tutorial(https://www.youtube.com/watch?v=APivt7U4WP0)


function rectangle(x, y, w, h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.fill();
  ctx.stroke();
}

function fillColor(r, g, b) {
  r = String(r);
  g = String(g);
  b = String(b);
  ctx.fillStyle = "rgb("+r+","+g+","+b+")";
}

function strokeSize(size) {
  ctx.lineWidth = String(size);
}

function background(r, g ,b) {
  fillColor(r, g, b);
  noStroke();
  rectangle(0, 0, width, height);

}

function strokeColor(r, g, b) {
  r = String(r);
  g = String(g);
  b = String(b);
  ctx.strokeStyle = "rgb("+r+","+g+","+b+")";
}

function noStroke(){
  ctx.strokeStyle = "rgba(0, 0, 0, 0)";
}

function noFill() {
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
}

function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function circle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x,y,r, 0, 2*Math.PI);
  ctx.fill();
  ctx.stroke();
}
