class Box{
    constructor(x, y, width, height){
        var a = {
            restitution: 0.8, friction: 0.4, density: 2, isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,a)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    Display(){
        push();
        rectMode(CENTER);
        fill("red");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }

}