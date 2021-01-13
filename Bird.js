class Bird{
    constructor(x,y){
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':1.5
            
    }
    this.body=Bodies.rectangle(x,y,30,30,options)
    this.width=30;
    this.height=30;
    World.add(world,this.body)
}
 display(){
     var p = this.body.position;
     p.x=mouseX;
     p.y=mouseY;
     var a = this.body.angle ;
     push();
     translate(p.x, p.y);
    rotate(a);
    rectMode(CENTER);
    fill("red");
    rect(0,0, this.width, this.height);
    pop();
 }
}
