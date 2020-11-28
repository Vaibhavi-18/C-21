var fixedRect, movingRect, go1 , go2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  go1 = createSprite(100,400,50,80);
  go1.shapeColor = "purple"

  go2 = createSprite(200,400,50,80)
go2.shapeColor = "pink"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


 if(isTouching( movingRect ,  go1)) {

  movingRect.shapeColor = "red";
  go1.shapeColor = "red";
 }
 else {
  movingRect.shapeColor = "green";
  go1.shapeColor = "purple";
}

  drawSprites();
}









