/// keys.js


var mouseX = 0;
var mouseY = 0;

document.onmousemove = function(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}


var keyPress = {};
var keyDown = {};
var keyRelease = {};
for (var i=0; i<255; i++) {
  var l = String.fromCharCode(i);
  keyPress[l] = false;
  keyRelease[l] = false;
  keyDown[l]= false;
}

document.onkeypress = function(event){    //Youtube Tutorial(https://www.youtube.com/watch?v=APivt7U4WP0)
  var key = (event.key).toUpperCase();
  if(!keyDown[key]){
    keyDown[key] = true;

    keyPress[key] = true;
  }
}

document.onkeyup = function(event) {    //Youtube Tutorial(https://www.youtube.com/watch?v=APivt7U4WP0)
  var key = (event.key).toUpperCase();
  keyDown[key] = false;
  keyRelease[key] = true;
}


//var keyDown = {};
//var keyRelease = {};
