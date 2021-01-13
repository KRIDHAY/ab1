class Pigs {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
            
    }
    this.body=Bodies.rectangle(x,y,40,40,options)
    this.width=40;
    this.height=40;
    World.add(world,this.body)
}
 display(){
     var p = this.body.position;
    
     var a = this.body.angle ;
     push();
     translate(p.x, p.y);
    rotate(a);
    rectMode(CENTER);
    fill("green");
    rect(0,0, this.width, this.height);
    pop();
 }
}