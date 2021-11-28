class Snow{
    constructor(x,y,c){
        var options= {
            friction: 0.1, density: 0.1
        }
        this.body=Matter.Bodies.rectangle(x,y,10,10)
        Matter.World.add(world,this.body)
        if(c === 1){ 
            this.image = loadImage ("snow4.webp") } 
            else{ this.image = loadImage ("snow5.webp") }
    }
    display(){
push ()
translate (this.body.position.x,this.body.position.y)
image(this.image,0,0,50,50)
pop ()
    }
}