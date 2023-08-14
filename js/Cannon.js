class Cannon{
   constructor(x,y,width,height,angle) {
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.angle=angle;
   }
   display(){

  fill("#676e6a")
   push()
 translate(this.x,this.y);
  rotate(this.angle);
  rect(-10,-30,this.width,this.height);
  pop()
  arc (this.x-32,this.y+110,75,125,PI,TWO_PI);
   noFill()
   }
}