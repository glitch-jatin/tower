

  class Box{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
         'friction':1.0,
         'density':0.5
         //isStatic: true
      }
      
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
      this.Visiblity = 255;
    }
    display(){
     
     
      if(this.body.speed <8){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility -5;
        pop();
        }
        //uncomment the below line then it will change color of ball also
        fill("pink");
    }
}


