var marimage
var mar
var barcoimage
var barco
function preload(){
marimage=loadImage("sea.png")
barcoimage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  mar=createSprite(400,200);
  mar.addImage(marimage)
  barco=createSprite(130,290,30,30);
  barco.addAnimation("navegando",barcoimage);
  barco.scale=0.25
}
function draw() {
  background("blue");
    drawSprites();

 
}
