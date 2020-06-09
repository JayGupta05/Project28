class Dustbin{
    constructor(x,y){
       
        this.width = 200;
        this.height = 20;
        this.rect2=Bodies.rectangle(x,y,this.width,this.height,{isStatic:true});
        World.add(world,this.rect2);
        //manipulated x,y,width,height to get the desired values
        this.rect3=Bodies.rectangle(x-this.width/2,y-this.height*2,this.height,this.width/2,{isStatic:true});
        World.add(world,this.rect3);
        this.rect1=Bodies.rectangle(x+this.width/2,y-this.height*2,this.height,this.width/2,{isStatic:true});
        World.add(world,this.rect1);
        
        this.image = loadImage("sprites/dustbingreen.png");
    }
    display(){
        push();
        
        fill("red");
        rectMode(CENTER);
       // rect(this.rect1.position.x, this.rect1.position.y, this.height, this.width/2);
        //rect(this.rect3.position.x, this.rect3.position.y, this.height, this.width/2);
        //rect(this.rect2.position.x, this.rect2.position.y, this.width, this.height);
        imageMode(CENTER);
        translate(this.rect2.position.x, this.rect2.position.y-this.height*2);
        image(this.image,0 ,0 , 200, 100);
        pop();
    }
}