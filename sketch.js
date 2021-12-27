var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces
     block1 = createSprite(0,580,360,30);
     block1.shapeColor = rgb(255,0,0); 
     block2 = createSprite(295,580,200,30);
     block2.shapeColor = rgb(0,0,255);
     block3 = createSprite(515,580,200,30);
     block3.shapeColor = rgb(0,255,0);
     block4 = createSprite(740,580,220,30);
     block4.shapeColor = rgb(255,255,0);

    //create box sprite and give velocity
    box = createSprite(random(20,750),300,30,30)
    box.shapeColor = rgb(255,255,255);
    box.velocityX = 5;
    box.velocityY = 5;
}

function draw() {
    background(rgb(169,169,169));
    

    // Displaying the Sprites
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    box.display();
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges)


    //add condition to check if box touching surface and make it box
    if (box.isTouching(block1) && box.bounceOff(block1)) {
     box.shapeColor =  rgb(255,0,0);
     music.play();
    }
    if (box.isTouching(block2) && box.bounceOff(block2)) {
        box.shapeColor = rgb(0,0,255) ;
        music.stop();
        box.velocityX = 0;
        box.velocityY = 0;
       }
       if (box.isTouching(block3) && box.bounceOff(block3)) {
        box.shapeColor = rgb(0,255,0);
        
       }
       if (box.isTouching(block4) && box.bounceOff(block4)) {
        box.shapeColor = rgb(255,255,0) ;
        
       }
}
