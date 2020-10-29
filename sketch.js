var  car, speed, wight; 
function setup() {
  createCanvas(1370,400)
  speed=random(55,90);
  wight=random(400,300);
  car=createSprite(50,200,70,50);
  car.velocityX=speed;
  wall = createSprite(1300,200,100,400)
  wall.shapeColor="pink";
  car.shapeColor="orange";
}

function draw() {
  background(0);
  if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX=0;
  var deform = 0.5*wight*speed*speed/22500;
  if(deform > 180){
    car.shapeColor="red"
  }
  if(deform > 100 && deform < 180){
    car.shapeColor="green"
  }
  if(deform < 100){
    car.shapeColor="blue"
  }
  }  
  drawSprites();

}