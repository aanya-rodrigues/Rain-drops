var drop1;
var man, manImg, manSprite;
function preload(){
    //manImg= loadImage("walking_1.png");
}

function setup(){
   createCanvas(500,800);
   drop1= new rainClass(10,10,5); 
   Matter.add(world,drop1);
   manSprite= createSprite(50,400,50,100);
   //manSprite.addImage(manImg);
}

function draw(){
   background(0);
   drop1.dislplay();
   drawSprites();
}   

