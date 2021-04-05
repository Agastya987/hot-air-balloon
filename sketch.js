var balloon,balloonImage1,balloonImage2;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}
 updateheight();
 showError();
 readHeight();
 keyPressed();
// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
function keyPressed(){
  if  (keyDown(UP_ARROW)){
    updateHeight(0,-10);
    balloon.addImage("hotairballoon1.png");
    balloon.scale=balloon.scale - 0.01
  }
  if  (keyDown(LEFT_ARROW)){
    updateHeight(-10,0);
    balloon.addImage("hotairballoon2.png");
    balloon.scale=balloon.scale +0.01
  }
  if  (keyDown(RIGHT_ARROW)){
    updateHeight(10,0);
    balloon.addImage("hotairballoon3.png");
    balloon.scale=balloon.scale - 0.02
  }
  if  (keyDown(DOWN_ARROW)){
    updateHeight(0,+10);
    balloon.scale=balloon.scale + 0.01
  }




}


function updateheight(x,y){
  database.ref(ballon/height).set({
    'x': height.x+x,
    'y': width.y+y
  })
}
function readHeight(data){
  height=data.val();
  balloon.x = balloon.x;
  balloon.y = balloon.y
}
function showError(){
  console.log("Error im writing the database");

}