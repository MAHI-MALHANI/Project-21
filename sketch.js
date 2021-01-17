var canvas;
var keySound;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    keySound = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     surface1=createSprite(20,580,50,20);
     surface1.shapeColor="darkBlue";

     surface2=createSprite(90,580,50,20);
     surface2.shapeColor="forestGreen";

     surface3=createSprite(160,580,20,20);
     surface3.shapeColor="mediumVioletRed";

     surface4=createSprite(230,580,20,20);
     surface4.shapeColor="crimson";

    //create box sprite and give velocity
      box=createSprite(random(20,750), 50,20,20);
      box.shapeColor="white";
      
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     createEdgeSprites();
     box.bounceOff(edges);

     if(keyDown("space")){
       box.velocityX=5;
       box.velocityY=5;
     }

    //add condition to check if box touching surface and make it box
    if(surface1.isTouhcing(box)&& box.bounceOff(surface1)){
      box.shapeColor="darkBlue";
      keySound.play();
    }
    
    if(surface2.isTouhcing(box)&&box.bounceOff(surface2)){
      box.shapeColor="forestGreen";
    }

    if(surface3.isTouhcing(box)&&box.bounceOff(surface3)){
      box.shapeColor="mediumVioletRed";
    }

    if(surface4.isTouhcing(box)&&box.bounceOff(surface4)){
      box.shapeColor="crimson";
      box.velocityX=0;
      box.velocityY=0;
      keySound.stop();
    }

    drawSprites();
}

//function isTouching(object1,object2,object3,object4,object5){
  //  if (object1.x - object2.x < object2.width/2 + object1.width/2 
    //    && object2.x - object1.x < object2.width/2 + object1.width/2 
      //  && object1.y - object2.y < object2.height/2 + object1.height/2 
        //&& object2.y - object2.y < object2.height/2 + object1.height/2) {
          // return true; 
          //} 
          //else { 
            //return false; 
          //} 
//}