var bg, bgImage;
var snowflake, snowflakeImage;

function preload(){
  snowflakeImage =loadImage("snow4.webp");
  bgImage =loadImage("snow3.jpg");
}
function setup(){
  createCanvas(800,400);
}

function draw() {
background(bgImage);
drawSprites();
createSnowflake();
}

function createSnowflake(){
if(framecount%10===0){
snowflake= createSprite(random(0,800),0,50,50);
snowflake.velocityX = -2;
snowflake.velocityX = 4;
snowflake.addImage(snowflakeImage);
snowflake.scale= 0.1;
}

}