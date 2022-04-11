var fixedRect;
var movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400,200,80,50)
  movingRect=createSprite(600,200,80,50)
  fixedRect.debug=true;
  movingRect.debug=true;
  fixedRect.shapeColor="yellow"
  movingRect.shapeColor="blue"
obj3=createSprite(200,300,80,50)
  obj4=createSprite(500,300,80,50)
  obj3.debug=true;
  obj4.debug=true;
  obj3.shapeColor="yellow"
  obj4.shapeColor="blue"
  obj3.velocityX=+3
  obj4.velocityX=-3

}

function draw() {
  background("red");
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(movingRect,obj3)){
    obj3.shapeColor="green"
    movingRect.shapeColor="green"
  }
else{
  obj3.shapeColor="yellow"
  movingRect.shapeColor="blue"
}
 bounceOff(obj3,obj4);
  drawSprites();
}

