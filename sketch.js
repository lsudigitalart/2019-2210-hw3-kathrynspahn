function setup(){
    createCanvas(windowWidth,windowHeight); 
    background(255);
    noStroke();

    var x = 3;
    var y = 50;
    var z = 9;
   


 fill(0,50,50);
 stroke(5)
 for (var x = 3; x < width; x=x+20) {
   fill(0,0,100)
   circle(x,0,x,height);
   fill(0,5,95)
   circle(x, 50, x, height);
   fill(0,10,90)
   circle(x,100,x,height);
   fill(0,15,85)
   circle(x,150,x,height);
   fill(0,20,80)
   circle(x,200, x, height);
   fill(0,25,75)
   circle(x,250,x,height);
   fill(0,30,70)
   circle(x,300,x,height);
   fill(0,35,65)
   circle(x,350,x,height);
   fill(0,40,60)
   circle(x,400, x, height);
   fill(0,45,55)
   circle(x,450,x,height);
   fill(0,50,50)
   circle(x,500,x,height);
   fill(0,55,45)
   circle(x,550,x,height);
   fill(0,60,40)
   circle(x,600,x,height);
   fill(0,65,35)
   circle(x,650,x,height);
   fill(0,70,30)
   circle(x,700, x, height);
   fill(0,75,25)
   circle(x,750,x,height);
   fill(0,80,20)
   circle(x,800,x,height);
  }

  fill(100,0,0,30)
  for (var y = 50; y < height; y=y+50) {
   rect(y, 0, y, width);
   }



 
} 

function draw() {
  
}