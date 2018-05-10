let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
let horizontal = 0;
let vertical = 0;
let btnRainbow = document.querySelector("#rainbow");
let btnDelete = document.querySelector("#btnDelete");
let onOffMode = false;


function drawLine(){
  // context.clearRect(750, 410, canvas.width, canvas.height);
  // mnake line
  context.beginPath();
  context.moveTo(375 + horizontal, 205 + vertical);
  context.lineTo(376 + horizontal, 206 + vertical);
  context.stroke();
  context.closePath();
  // line style
  context.lineWidth = 1;
  context.strokeStyle = "rgba(0, 0, 0, .5)"; 
}

document.addEventListener("keydown", keysPressed, false);
document.addEventListener("keyup", keysReleased, false);

let keys = [];

function keysPressed(e){
  // store entry for all keys pressed
  keys[e.keyCode] = true;

  // left
  if (keys[37]){
    --horizontal;
  }

  // right
  if (keys[39]){
    ++horizontal;
  }

  // down
  if (keys[38]){
    --vertical;
  }

  // up
  if (keys[40]){
    ++vertical;
  }

  e.preventDefault();
  if (onOffMode === false){
     drawLine();
  }
  else{
    rainbowLine();
  }
}

function keysReleased(e){
  // mark keys that were released
  keys[e.keyCode] = false;
}

function randomColor(){
  // pick a red from 0-255
  let r = Math.floor(Math.random() * 256);
  // pick a green from 0-255
  let g = Math.floor(Math.random() * 256);
  // pick a blue from 0-255
  let b = Math.floor(Math.random() * 256);
  return "rgba(" + r + ", " + g + ", " + b + ", 0.9)";
}

btnRainbow.addEventListener("click", function(){
  canvas.classList.toggle("canvasRainbow");
  if (onOffMode === false){
    onOffMode = true;
  }
  else{
    onOffMode = false;
  }
}); 

function rainbowLine(){ 
  let generateRainbow = randomColor();
  // mnake line
  context.beginPath();
  context.moveTo(375 + horizontal, 205 + vertical);
  context.lineTo(376 + horizontal, 206 + vertical);
  context.closePath();
  // line style
  context.lineWidth = 4;
  context.strokeStyle = generateRainbow;
  context.stroke();
}

btnDelete.addEventListener("click", function(){
  context.clearRect(0, 0, canvas.width, canvas.height);
});

