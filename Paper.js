class Paper{
    constructor(x,y,radius){
        var options={
            density:1.2,
            restitution:0.8,
            friction:1.0
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.image=loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
       var pos = this.body.position
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,70,70);
    }
}