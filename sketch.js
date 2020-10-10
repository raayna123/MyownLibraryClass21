var fixedRect, movingRect;
var object1, object2, object3, object4;

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(200, 600, 50, 80);
 movingRect = createSprite(400,200,80,30);

 fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  movingRect.velocityY = -5;

  object1 = createSprite(100,100,50,50);
  object1.shapeColor = "green";

  object2 = createSprite(200,100,50,50);
  object2.shapeColor = "green";

  object3 = createSprite(300,100,50,50);
  object3.shapeColor = "green";

  object4 = createSprite(400,600,50,50);
  object4.shapeColor = "green";
  object4.velocityY = -5;

}

function draw() {
  background(0);  

movingRect.y = World.mouseY;
movingRect.x = World.mouseX;

if(isTouching(movingRect, object3)) {
  movingRect.shapeColor = "blue";
  object3.shapeColor = "blue";
} else {
  movingRect.shapeColor = "green";
  object3.shapeColor = "green";
}

bounceOff(movingRect, object4);

  drawSprites();
}

