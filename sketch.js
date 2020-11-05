var car;
var building; 
function setup() {
  createCanvas(400,400);
  car =  createSprite(200, 300, 30, 30);
  building =  createSprite(350, 200, 40, 300);
  car.shapeColor = "green"
  building.shapeColor = "green"
  
}

function draw() {
  background(200,255,255);  

 car.x = World.mouseX;
 car.y = World.mouseY;

  if(Math.round(car.x - building.x) < Math.round(car.width/2+building.width/2)
  && (Math.round(building.x - car.x) < Math.round(car.width/2+building.width/2)
  && (Math.round(car.y - building.y) < Math.round(car.width/2+building.width/2)
  && Math.round(building.y - car.y) < Math.round(car.width/2+building.width/2))){
    

    
    //to change the colour to red 
    car.shapeColor = "red"
    building.shapeColor = "red";

  }//end of if condition 
  else{
    car.shapeColor = "green"
    building.shapeColor = "green";
  }

  drawSprites();
}//end of draw 



