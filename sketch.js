
var newX=500
var gameState="PLAY"
function preload (){
  spaceShip1Img=loadImage("spaceship1.png")
  spaceShip2Img=loadImage("spaceship2.png")
  spaceShip3Img=loadImage("spaceship3.png")
  bulletImg=loadImage("rocketBullet.png")
  burstImage=loadImage("burst image.png")
  backImg=loadImage("galaxy images.jpg")
  burstSound=loadSound("burstSound.mp3")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  bulletGroup=new Group ()
  spaceShipGroup=new Group()
for(var i=0; i<25; i++){
  spaceship1=new SpaceShip(newX)
  spaceShipGroup.add(spaceship1.body)
  newX=spaceship1.width + newX + 300

 
}
  
rocket1=new Rocket()

}

function draw() {
  background(backImg);  
  drawSprites();
if(gameState=="PLAY"){

rocket1.body.collide(spaceShipGroup,destroys)
camera .position.x=rocket1.body.x+300
  if(keyDown(UP_ARROW)){
    rocket1.body.y-=5}

    if(keyDown(DOWN_ARROW)){
      rocket1.body.y+=5}

      if(keyDown(RIGHT_ARROW)){
        rocket1.body.x+=5}

        if(keyDown(LEFT_ARROW)){
          rocket1.body.x-=5
        }
if(frameCount%100===0){
  bullet=createSprite(width-100,random(0,height))
  bullet.velocityX=-20
  bulletGroup.add (bullet)
  bullet.addImage(bulletImg)
  bullet.rotation=-90
  bullet.scale=0.8
}
rocket1.body.collide(bulletGroup,destroys)
}
if(gameState==="END"){

  rocket1.body.addImage(burstImage)
  spaceShipGroup.setVelocityEach(0,0)
bulletGroup.setVelocityEach(0,0)
}
}

function destroys(rocket1,bullet){
bullet.destroy();
gameState="END"
burstSound.play ()
rocket1.setVelocity(0,0)
}
