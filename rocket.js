class Rocket{
    constructor(){
        this.body=createSprite(100,height/2)
        this.rocketImage=loadImage("rocket.png")
        this.body.addImage(this.rocketImage)
        this.body.scale=0.5
        this.body.rotation=90
    }
    moveright(){
        this.body.x+=5
    }
    moveleft(){
        this.body.x-=5
    }
    moveup(){
        this.body.y+=5
    }
    movedown(){
        this.body.y-=5
    }
}
