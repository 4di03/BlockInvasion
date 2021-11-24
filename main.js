/// main.js


var canvas = document.getElementById("mycanvas");

var ctx = canvas.getContext("2d");

var width;

var height;

var framect = 0;

var enemyct = 0;

var n = 3000;

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
  object.size = 0;
  object.x = -222;
  object.y = -222;
  object.xspd = 0;
  object.yspd = 0;
  object.drawable = false;
}



function writeStats(){
  ctx.font = "30px Arial";
  ctx.fillStyle = "green";

  ctx.fillText("HP: "+hero.hp, 50, 50);
  ctx.fillStyle = "orange";
  ctx.fillText("Ammo: "+hero.ammo, 200, 50);
  ctx.fillStyle = "orange";
  var score = Math.round(framect/30);
  localStorage.setItem("score",score);
  ctx.fillText("Score: "+ score, width-150, 50);
  ctx.fillStyle = "red";

  ctx.fillText("Difficulty: "+ diff, width-500, 50);

}

function spawnStuff(){
    if( framect < 900 && framect % 60 === 0){
      new enemy();
      diff = "easy";
    }

    else if( framect >= 900 && framect < 1800 && framect % 45 === 0){    // difficult gets harder every 15 seconds
      new enemy();
      diff = "normal";
    }
    else if( framect >= 1800 && framect < 2700 && framect % 30 === 0){
      new enemy();
      diff = "hard";
    }
    else if( framect >= 2700 && framect % 15 === 0){
      new enemy();
      diff = "good luck :)";
    }


    if(framect % 10 === 0) { //spawns ammo
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


for(var i=0; i<(0.01198*window.innerWidth); i++){
  new wall((window.innerWidth/3)+i*(0.01198*window.innerWidth), window.innerHeight*.2);
  new wall((window.innerWidth*.05)+ i*(0.01198*window.innerWidth),  window.innerHeight*.5);
  new wall((window.innerWidth*.65)+i*(0.01198*window.innerWidth),  window.innerHeight*.5);
  new wall((window.innerWidth/3)+i*(0.01198*window.innerWidth),  window.innerHeight*.8);
}



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
  for (var i = 0; i<objects.length; i++) {
    if(objects[i].drawable == true) objects[i].draw();        //Youtube tutorial(https://www.youtube.com/watch?v=APivt7U4WP0)
  }
  hero.draw();
  writeStats();
}



function gameLoop(){
  step();
  draw();
  keyEnd();


  }

var target_fps = 60;
setInterval(gameLoop, 1000/target_fps);
