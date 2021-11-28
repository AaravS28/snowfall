 const Engine = Matter.Engine; const World= Matter.World; const Bodies = Matter.Bodies;
var bgimg,engine,world
var snowflake, arr= [] 
function preload(){
bgimg= loadImage("snow2.jpg")


}





function setup() {
  createCanvas(800,400);
  
  engine= Engine.create()
  world= engine.world
}

function draw() {
  background(bgimg);  
 Engine.update(engine)
  if(frameCount %10 == 0){
snowflake=new Snow(random(10,790),0,Math.round(random(1,2)))
arr.push(snowflake)
  }
for(var i=0;i<arr.length;i++){
  arr[i].display()
  
}
}
