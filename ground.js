class Ground{
    constructor(){
        this.body=Bodies.rectangle(400,595,800,15,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("green");
        rect(this.body.position.x,this.body.position.y,800,15)
    }
}