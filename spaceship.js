class SpaceShip{
constructor(x){
    this.width=50
    this.body=createSprite(x,random(10,height),50,50)
    this.body.velocityX=-6
    var rand=random([1,2,3])
    switch(rand){
    
        case 1: this.body.addImage(spaceShip1Img);break;
        case 2: this.body.addImage(spaceShip2Img);break;
        case 3: this.body.addImage(spaceShip3Img);break;


    }
    this.body.scale=0.3
}

}