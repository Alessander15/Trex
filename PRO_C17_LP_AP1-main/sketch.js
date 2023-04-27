var trex,trexRunning;
var ground,groundImg;
var visibleGround;

//preload carrega as midías do jogo 
function preload(){
  trexRunning = loadAnimation ("trex1.png","trex3.png","trex4.png");
  groundImg = loadImage("ground2.png");
  
}
//setup faz a aconfiguração
function setup(){
  createCanvas(600,200);
 
  trex = createSprite (50,160,50);
  trex.addAnimation("running",trexRunning);
  trex.scale = 0.5;

  ground = createSprite (300,160,600,2);
  ground.addImage("ground",groundImg);
  visibleGround = createSprite(300,180,600,2); 
  visibleGround.visible = false;

  
}
//draw faz o movimento, a ação do jogo
function draw(){
  background("#f0f9f7");
  if (keyDown ("space")&&trex.y>=150){
    trex.velocityY =-10; 
  }

  trex.velocityY +=0.5;

  ground.velocityX = -10;
  if(ground.x<0){
    ground.x = ground.width/2
  }

  trex.collide (visibleGround);

  console.log(trex.y);
  
  
 
 
   //coordenadas do mouse na tela
  
  drawSprites();
  text("X: "+mouseX+"/ Y: "+mouseY,mouseX,mouseY);
}
