/// main.js


var canvas = document.getElementById("mycanvas");

var ctx = canvas.getContext("2d");

var width = window.innerWidth;

var height = window.innerHeight;

var framect = 0;

var enemyct = 0;

var n = 3000;

var ezbg = "./Images/background-easy.jpg"
var mbg = "./Images/background-medium.jpg"
var hbg = "./Images/background-hard.png"


var Bkgd = new Image();
Bkgd.src = ezbg;

var mediumBkgd = new Image();

var hardBkgd = new Image();

var fontsize = (0.03*height).toString();

var objects = [];
var enemies = [];

noStroke();
canvas.style.left = "0px";

canvas.style.top = "0px";



canvas.style.position = "absolute";

window.onresize = function() {

  width = window.innerWidth;

  height = window.innerHeight;

  canvas.width = width;

  canvas.height = height;

  draw();

}

function gameOver(){

  if( hero.hp <= 0 || hero.x > window.innerWidth || hero.x + hero.size < 0 || hero.y >window.innerHeight){   //game over condition
       window.location.href = 'gameover.html';
     }
}


function kill(object){
  /*object.size = 0;
  object.x = -222;
  object.y = -222;
  object.xspd = 0;
  object.yspd = 0;*/
  object.drawable = false;
}



function writeStats(){

  ctx.font = fontsize +"px Arial";
  ctx.fillStyle = "white";

  ctx.fillText("HP: "+hero.hp, 0.1*width, (50/1080)*height);

  ctx.fillText("Ammo: "+hero.ammo, 0.2*width , (50/1080)*height);

  var score = Math.round(framect/30);
  localStorage.setItem("score",score);


  ctx.fillText("Score: "+ score, 0.8* width, (50/1080)*height);


  ctx.fillText("Difficulty: "+ diff, 0.6*width, (50/1080)*height);

}

function spawnStuff(){
    if( framect < 900 && framect % 60 === 0){
      new enemy();
      diff = "easy";
    }

    else if( framect >= 900 && framect < 1800 && framect % 45 === 0){    // difficult gets harder every 15 seconds
      new enemy();
      diff = "medium";
      Bkgd.src = mbg;
    }
    else if( framect >= 1800 && framect < 2700 && framect % 30 === 0){
      new enemy();
      diff = "hard";
    }
    else if( framect >= 2700 && framect % 15 === 0){
      new enemy();
      diff = "good luck :)";
      Bkgd.src = hbg;
    }


    if(framect % 30 === 0) { //spawns ammo
          new ammo();

      }

}

function shoot(){
  if(hero.ammo > 0){                     // SHOOT ALGORITHM
    if (keyPress.G){
      bullets[bullets.length] = new bullet();      //spawn bullet
      bullets[bullets.length-1].yspd = -16;       //make bullet shoot
      hero.ammo += -1;                            //change ammo value

    }
    if (keyPress.V){
      bullets[bullets.length] = new bullet();
      bullets[bullets.length-1].xspd = -16;
      hero.ammo += -1;
    }
    if (keyPress.B){
      bullets[bullets.length] = new bullet();
      bullets[bullets.length-1].xspd = 16;
      hero.ammo += -1;
    }
  }

}
// create the  walls
new wall(width/4 , height/5, 0.5*width, height*0.034);
new wall(width*0.05 , height/2, 0.3*width, height*0.034);
new wall(width * 0.65 , height/2, 0.3*width, height*0.034);
new wall(width/4 , (4/5) * height, 0.5*width, height*0.034);
/*
for(var i=0; i<(0.01198*window.innerWidth); i++){
  new wall((window.innerWidth/3)+i*(0.01198*window.innerWidth), window.innerHeight*.2);
  new wall((window.innerWidth*.05)+ i*(0.01198*window.innerWidth),  window.innerHeight*.5);
  new wall((window.innerWidth*.65)+i*(0.01198*window.innerWidth),  window.innerHeight*.5);
  new wall((window.innerWidth/3)+i*(0.01198*window.innerWidth),  window.innerHeight*.8);
}*/



var hero = new player(window.innerWidth*0.5, window.innerHeight*.5);


new enemy();
new ammo();
window.onresize();
var diff;





function step(){
  framect++;

  for (var i = 0; i<objects.length; i++) {
    if(objects[i].step) objects[i].step();      //Youtube Tutorial(https://www.youtube.com/watch?v=APivt7U4WP0)


  }
  shoot();
  spawnStuff();
  gameOver();


}

function keyEnd(){
  for(var i in keyPress){
    keyPress[i] =false;
    keyRelease[i] = false;
  }
}


function draw(){
  background(25, 25, 25);
  Bkgd.onload = ctx.drawImage(Bkgd, 0, 0 , width, height);
 
  for (var i = 0; i<objects.length; i++) {
    /*if(objects[i].drawable == true)*/ objects[i].draw();        //Youtube tutorial(https://www.youtube.com/watch?v=APivt7U4WP0)
  }
  hero.draw();
  writeStats();

/* death animations
for(b in bullets){

if(bcollision(b.bbx, b.x, b.y + b.yspd)) {
      
  ctx.drawImage(deathImg, 20, 20, 50, 50);
  alert("hit");

    
  }
}*/
}


function gameLoop(){
  step();
  draw();
  keyEnd();


  }

var target_fps = 90;
setInterval(gameLoop, 1000/target_fps);

// enemy death


