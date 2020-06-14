//Declare all variables

var button1, button2, button3, button4;
var gameState = "Start";
var homeButton;
var Maharashtra,Karnataka,TamilNadu,AndhraPradesh,Kerala;
var button1img;
var button2img;
var button3img;
var button4img;
var Maharashtraimg;
var Karnatakaimg;
var Keralaimg;
var TamilNaduimg;
var AndhraPradeshimg;
var keralaMap, keralaMapimg;
var MaharashtraMap, MaharashtraMapimg;
var KarnatakaMap, KarnatakaMapimg;
var TamilNaduMap, TamilNaduMapimg;
var AndhraPradeshMap,AndhraPradeshMapimg;
var population = 34.8;
var literacy = 90.92;
var crime = 727.6;
var clean = 75;
var genderButton;
var applyButton;
var applyButton2;

//Maharashtra Stats
var population2 = 112;
var literacy2 = 82.34;
var crime2 = 217.1;
var clean2 = 55;

//Karnataka Stats
var population3 = 64.1;
var literacy3 = 75.36;
var crime3 = 237.5;
var clean3 = 60;

//Andhra Pradesh Stats
var population4 = 49.3;
var literacy4 = 67.41;
var crime4 = 206.4;
var clean4 = 75;

//Tamil Nadu Stats
var population5 = 67.9;
var literacy5 = 80.09;
var crime5 = 258.8;
var clean5 = 70;

//create slider components
var line,line2,line3,line4,line5;
var squareSlider, squareSlider2,squareSlider3,squareSlider4;
var sliderButton1,sliderButton2, sliderButton3, sliderButton4;

function preload(){
//load all images
//button images 
button1img = loadImage("Animations/StartGame.png");
button2img = loadImage("Animations/HowtoPlay.png");
button3img = loadImage("Animations/MoreInfo.png");
button4img = loadImage("Animations/Settings.png");
//state images
Maharashtraimg = loadImage("Animations/Maharashtra.png");
Karnatakaimg = loadImage("Animations/Karnataka.png");
Keralaimg = loadImage("Animations/Kerala.png");
TamilNaduimg = loadImage("Animations/TamilNadu.png");
AndhraPradeshimg = loadImage("Animations/AndhraPradesh.png");
//state map images
keralaMapimg = loadImage("Animations/KeralaMap.png");
MaharashtraMapimg = loadImage("Animations/maharashtradistrictmap.jpg");
AndhraPradeshMapimg = loadImage("Animations/AndhraPradeshMap.jpg");
TamilNaduMapimg = loadImage("Animations/TamilNadumap.png");
KarnatakaMapimg = loadImage("Animations/KarnatakaMap.jpg");


}

function setup() {
  //create canvas
  createCanvas(displayWidth-20, displayHeight-20);

  //create buttons
  button1 = createSprite(width/2,height-400,50,20);
  button1.addImage("button1", button1img);

  button2 = createSprite(width/2,height-350,50,20);
  button2.addImage("button2", button2img);

  button3 = createSprite(width/2,height-300,50,20);
  button3.addImage("button3", button3img);

  button4 = createSprite(width/2,height-250,50,20);
  button4.addImage("button4", button4img);
  
  //create homebutton
  homeButton = createSprite(50,25,50,10)
  homeButton.visible = false;

  //create state buttons
  Maharashtra = createSprite(width/2,height-450,50,20);
  Maharashtra.addImage("Maharashtra", Maharashtraimg);
  Maharashtra.visible = false;

  Karnataka = createSprite(width/2,height-500,50,20);
  Karnataka.addImage("Karnataka", Karnatakaimg);
  Karnataka.visible = false;

  TamilNadu = createSprite(width/2,height-550,50,20);
  TamilNadu.addImage("TamilNadu", TamilNaduimg);
  TamilNadu.visible = false;

  AndhraPradesh = createSprite(width/2,height-600,50,20);
  AndhraPradesh.addImage("AndhraPradesh", AndhraPradeshimg);
  AndhraPradesh.visible = false;

  Kerala = createSprite(width/2,height-650,50,20);
  Kerala.addImage("Kerala", Keralaimg);
  Kerala.visible = false;

  //create state maps
  keralaMap = createSprite(600,200);
  keralaMap.addImage("keralaMap", keralaMapimg);
  keralaMap.visible = false;
  keralaMap.scale = 0.5;

  KarnatakaMap = createSprite(550,250);
  KarnatakaMap.addImage("KarnatakaMap", KarnatakaMapimg);
  KarnatakaMap.visible = false;
  KarnatakaMap.scale = 0.25;

  AndhraPradeshMap = createSprite(550,250);
  AndhraPradeshMap.addImage("AndhraPradeshMap", AndhraPradeshMapimg);
  AndhraPradeshMap.visible = false;
  AndhraPradeshMap.scale = 0.5;

  TamilNaduMap = createSprite(550,250);
  TamilNaduMap.addImage("TamilNaduMap", TamilNaduMapimg);
  TamilNaduMap.visible = false;
  TamilNaduMap.scale = 0.25;

  MaharashtraMap = createSprite(580,250);
  MaharashtraMap.addImage("MaharashtraMap", MaharashtraMapimg);
  MaharashtraMap.visible = false;
  MaharashtraMap.scale = 0.5;

  //policy buttons
  applyButton = createSprite(450,450,30,30);
  applyButton.shapeColor = "red";
  applyButton.visible = false;

  applyButton2 = createSprite(450, 500, 30,30);
  applyButton2.shapeColor = "white";
  applyButton2.visible=false;

  applyButton3 = createSprite(450,550, 30, 30);
  applyButton3.shapeColor = "yellow";
  applyButton3.visible = false

  //slider components
  //slider1 = population
  line = createSprite(400,150,600,5);
  line.shapeColor = "white";
  line.visible = false;

  squareSlider = createSprite(100,150,15,15);
  squareSlider.shapeColor ="blue";
  squareSlider.visible = false;

  sliderButton1 = createSprite(50,150,50,50);
  sliderButton1.shapeColor = "yellow";
  sliderButton1.visible = false;

  //slider2 = literacy rate
  line2 = createSprite(400,250,600,5);
  line2.shapeColor = "white";
  line2.visible = false;

  squareSlider2 = createSprite(100,250,15,15);
  squareSlider2.shapeColor ="blue";
  squareSlider2.visible = false;

  sliderButton2 = createSprite(50,250,50,50);
  sliderButton2.shapeColor = "yellow";
  sliderButton2.visible = false;

  //slider3 = cleanliness
  line3 = createSprite(400,350,600,5);
  line3.shapeColor = "white";
  line3.visible = false;

  squareSlider3 = createSprite(100,350,15,15);
  squareSlider3.shapeColor ="blue";
  squareSlider3.visible = false;

  sliderButton3 = createSprite(50,350,50,50);
  sliderButton3.shapeColor = "yellow";
  sliderButton3.visible = false;

  //slider4 = crime rate
  line4 = createSprite(400,450,600,5);
  line4.shapeColor = "white";
  line4.visible = false;

  squareSlider4 = createSprite(100,450,15,15);
  squareSlider4.shapeColor ="blue";
  squareSlider4.visible = false;

  sliderButton4 = createSprite(50,450,50,50);
  sliderButton4.shapeColor = "yellow";
  sliderButton4.visible = false;

}

function draw() {
  background("black"); 
  if(mousePressedOver(homeButton)){
    gameState = "Home";
   }
 
   if(gameState==="Home"){
    button1.visible = true;
    button2.visible = true;
    button3.visible = true;
    button4.visible = true;
    Maharashtra.visible = false;
    Karnataka.visible = false;
    TamilNadu.visible = false;
    AndhraPradesh.visible = false;
    Kerala.visible = false;
  }
 
  if(mousePressedOver(button1)){
     gameState = "Play";
   }
    
  if(mousePressedOver(button4)){
     gameState = "Slider";
  }

  if(mousePressedOver(button2)){
     gameState = "HowToPlay"
  }

  if(gameState === "Slider"){
    
    button1.visible = false;
    button2.visible = false;
    button3.visible = false;
    button4.visible = false;

    sliderButton1.visible = true;
    sliderButton2.visible = true;
    sliderButton3.visible = true;
    sliderButton4.visible = true;
    if(mousePressedOver(sliderButton1)){
      gameState="1";
    }
    }

    if(gameState==="1"){
      line.visible = true;
      line2.visible = false;
      line3.visible = false;
      line4.visible = false;
      squareSlider.visible = true;
      squareSlider2.visible = false;
      squareSlider3.visible = false;
      squareSlider4.visible = false;
     
     squareSlider.x = mouseX;

    if(squareSlider.x>=700){
      squareSlider.x = 100;
    }
    if(squareSlider.x<=100){
      squareSlider.x = 100;
    }
    if(squareSlider.x>=60 && squareSlider.x<=120){
      text("Kerala", 120,100);
      Kerala.visible = true;
      Kerala.x = 120;
      Kerala.y = 100;
      Kerala.scale = 0.75;
    }

    if(squareSlider.x>=180 && squareSlider.x<=240){
      AndhraPradesh.visible = true;
      AndhraPradesh.x = 240;
      AndhraPradesh.y = 60;
      AndhraPradesh.scale = 0.75;
    }

    if(squareSlider.x>=300 && squareSlider.x<=360){
      TamilNadu.visible = true;
      TamilNadu.x = 360;
      TamilNadu.y = 100;
      TamilNadu.scale = 0.75;
    }

    if(squareSlider.x>=420 && squareSlider.x<=480){
      Karnataka.visible = true;
      Karnataka.x = 480;
      Karnataka.y = 60;
      Karnataka.scale = 0.75;
    }

    if(squareSlider.x>=540 && squareSlider.x<=600){
     Maharashtra.visible = true;
     Maharashtra.x = 600;
     Maharashtra.y = 100;
     Maharashtra.scale = 0.75;
    }
    
    fill("White");
    text("Population",730,150);

  }
   
  if(mousePressedOver(sliderButton2)){
    gameState="2";
  }


  if(gameState==="2"){
    line.visible = false;
    line2.visible = true;
    line3.visible = false;
    line4.visible = false;
    squareSlider.visible = false;
    squareSlider2.visible = true;
    squareSlider3.visible = false;
    squareSlider4.visible = false;
   
   squareSlider2.x = mouseX;

  if(squareSlider2.x>=700){
    squareSlider2.x = 100;
  }
  if(squareSlider2.x<=100){
    squareSlider2.x = 100;
  }
  if(squareSlider2.x>=60 && squareSlider2.x<=120){
    text("Kerala", 120,100);
    Kerala.visible = true;
    Kerala.x = 120;
    Kerala.y = 100;
    Kerala.scale = 0.75;
  }

  if(squareSlider2.x>=180 && squareSlider2.x<=240){
    AndhraPradesh.visible = true;
    AndhraPradesh.x = 240;
    AndhraPradesh.y = 60;
    AndhraPradesh.scale = 0.75;
  }

  if(squareSlider2.x>=300 && squareSlider2.x<=360){
    TamilNadu.visible = true;
    TamilNadu.x = 360;
    TamilNadu.y = 100;
    TamilNadu.scale = 0.75;
  }

  if(squareSlider2.x>=420 && squareSlider2.x<=480){
    Karnataka.visible = true;
    Karnataka.x = 480;
    Karnataka.y = 60;
    Karnataka.scale = 0.75;
  }

  if(squareSlider2.x>=540 && squareSlider2.x<=600){
   Maharashtra.visible = true;
   Maharashtra.x = 600;
   Maharashtra.y = 100;
   Maharashtra.scale = 0.75;
  }
  
  fill("White");
  text("Population",730,150);

}

  if(mousePressedOver(button3)){
    gameState = "MoreInfo";
    fill("blue");
    textSize(25);
    text("b", width/2-600, height - 400);
    text("b", width/2-600, height-450);
    text("b", width/2-600, height-500);
    text("b", width/2-600, height - 550);
    text("b", wdith/2-600, height - 600);
  }
   
  if(gameState==="HowToPlay"){
    button1.visible = false;
    button2.visible = false;
    button3.visible = false;
    button4.visible = false;
    homeButton.visible = true;

    fill("blue");
    textSize(25);
    text("Press the Start Game Button. You will be taken to an interface which lets you choose your State.", width/2-600, height - 400);
    text("After choosing the state, use the apply buttons on the bottom left to implement policies.", width/2-600, height-450);
    text("Reach the favourable conditions of each state to win.", width/2-600, height-500);
    text("Information on the curret statistics of the states can be found by pressing the settings button.", width/2-600, height - 550);
    text("In Settings, the latest statitics will be available in the form of sliders.", wdith/2-600, height - 600);
  }

  if(gameState==="MoreInfo"){
    button1.visible = false;
    button2.visible = false;
    button3.visible = false;
    button4.visible = false;
    homeButton.visible = true;

    fill("yellow");
    textSize(25);
    text("Message from the creator", width/2 - 600, height - 200);
    text("I created this game for a very important reason. It's about something we all fail to understand", width/2 -600, height - 300);
  }

  if(gameState==="Play"){
    background("black");
    button1.visible = false;
    button2.visible = false;
    button3.visible = false;
    button4.visible = false;

    Maharashtra.visible = true;
    Karnataka.visible = true;
    TamilNadu.visible = true;
    AndhraPradesh.visible = true;
    Kerala.visible = true;


    fill("black");
    textSize(50);
    text("States",300,50);

    homeButton.visible = true;

    //declare game gameStates
  if(mousePressedOver(Maharashtra)){
    gameState = "Mah";
    }
  if(mousePressedOver(TamilNadu)){
    gameState = "Tnu";
    }
  if(mousePressedOver(Karnataka)){
    gameState = "Krt";
    }   
  if(mousePressedOver(AndhraPradesh)){
    gameState = "Anp";
    }   
  if(mousePressedOver(Kerala)){
    gameState = "Ker";
    }   
  }


  // Maharashtra State:
  if(gameState === "Mah"){
    background("black");
    Maharashtra.visible = false;
    Karnataka.visible = false;
    TamilNadu.visible = false;
    AndhraPradesh.visible = false;
    Kerala.visible = false;
    homeButton.visible = false;
    MaharashtraMap.visible = true;

    fill("yellow");
    textSize(30);
    text("Population:" + population2, 100,150);
    text("Literacy Rate:" + literacy2, 100,200);
    text("Cleanliness:" + clean2, 100, 250);
    text("Crime Rate:" + crime2, 100,300)

    textSize(40);
    text("",320,50);

    fill("white");
    textSize(15);
    text("Increased use of chemical drugs in hospitals.",100,450);
    text("Police use more firepower against criminals", 100,500);
    text("Increased energy production", 100, 550);

    applyButton.visible = true;
    applyButton2.visible = true;
    applyButton3.visible = true;
    
    //policy 1
    if(mousePressedOver(applyButton)){
      population = population + 0.2;
      clean = clean - 0.4;
    }
    
    //policy 2
    if(mousePressedOver(applyButton2)){
      crime = crime - 0.02;
      population = population - 0.002;
    }

    //policy 3
    if(mousePressedOver(applyButton3)){
      clean = clean - 0.1;
      population = population + 0.2;
      literacy = literacy + 0.1;
      crime = crime - 0.2;
    }
  }


  //Tamil Nadu State:
  if(gameState === "Tnu"){
    background("Black");
    Maharashtra.visible = false;
    Karnataka.visible = false;
    TamilNadu.visible = false;
    AndhraPradesh.visible = false;
    Kerala.visible = false;
    homeButton.visible = false;
    TamilNaduMap.visible = true;

    fill("yellow");
    textSize(30);
    text("Population:" + population5, 100,150);
    text("Literacy Rate:" + literacy5, 100,200);
    text("Cleanliness:" + clean5, 100, 250);
    text("Crime Rate:" + crime5, 100,300)

    textSize(40);
    text("TAMIL NADU",320,50);

    fill("white");
    textSize(15);
    text("Increased use of chemical drugs in hospitals.",100,450);

    text("Police use more firepower against criminals", 100,500);
    text("Increased energy production", 100, 550);

    applyButton.visible = true;
    applyButton2.visible = true;
    TamilNaduMap.visible = true;
    applyButton3.visible = true;


    if(mousePressedOver(applyButton)){
      population = population + 0.2;
      clean = clean - 0.4;
    }
    
    if(mousePressedOver(applyButton2)){
      crime = crime - 0.02;
      population = population - 0.002;
    }

    if(mousePressedOver(applyButton3)){
      clean = clean - 0.1;
      population = population + 0.2;
      literacy = literacy + 0.3;
      crime = crime - 0.2;
    }
  }
  if(gameState === "Krt"){
    background("black");
    Maharashtra.visible = false;
    Karnataka.visible = false;
    TamilNadu.visible = false;
    AndhraPradesh.visible = false;
    Kerala.visible = false;
    homeButton.visible = false;
    KarnatakaMap.visible = true;

    fill("yellow");
    textSize(30);
    text("Population:" + population3, 100,150);
    text("Literacy Rate:" + literacy3, 100,200);
    text("Cleanliness:" + clean3, 100, 250);
    text("Crime Rate:" + crime3, 100,300)

    fill("white");
    textSize(15);
    text("Increased use of chemical drugs in hospitals.",100,450);

    text("Police use more firepower against criminals", 100,500);
    text("Increased energy production", 100, 550);
    applyButton.visible = true;
    applyButton2.visible = true;
    applyButton3.visible = true;

    if(mousePressedOver(applyButton)){
      population = population + 0.2;
      clean = clean - 0.4;
    }
    
    if(mousePressedOver(applyButton2)){
      crime = crime - 0.02;
      population = population - 0.002;
    }

    if(mousePressedOver(applyButton3)){
      clean = clean - 0.1;
      population = population + 0.2;
      literacy = literacy + 0.3;
      crime = crime - 0.2;
    }
  }
  if(gameState === "Anp"){
    background("black");
    Maharashtra.visible = false;
    Karnataka.visible = false;
    TamilNadu.visible = false;
    AndhraPradesh.visible = false;
    Kerala.visible = false;
    homeButton.visible = false;
    AndhraPradeshMap.visible = true;

    fill("yellow");
    textSize(30);
    text("Population:" + population4, 100,150);
    text("Literacy Rate:" + literacy4, 100,200);
    text("Cleanliness:" + clean4, 100, 250);
    text("Crime Rate:" + crime4, 100,300)

    textSize(40);
    text("ANDHRA PRADESH",320,50);

    fill("white");
    textSize(15);
    text("Increased use of chemical drugs in hospitals.",100,450);

    text("Police use more firepower against criminals", 100,500);
    text("Increased energy production", 100, 550);
    applyButton.visible = true;
    applyButton2.visible = true;
    applyButton3.visible = true;

    if(mousePressedOver(applyButton)){
      population = population + 0.2;
      clean = clean - 0.4;
    }
    
    if(mousePressedOver(applyButton2)){
      crime = crime - 0.02;
      population = population - 0.002;
    }

    if(mousePressedOver(applyButton3)){
      clean = clean - 0.1;
      population = population + 0.2;
      literacy = literacy + 0.3;
      crime = crime - 0.2;
    }
  }


  if(gameState === "Ker"){
    background("black");
    Maharashtra.visible = false;
    Karnataka.visible = false;
    TamilNadu.visible = false;
    AndhraPradesh.visible = false;
    Kerala.visible = false;
    homeButton.visible = false;
    keralaMap.visible = true;
    
     
    fill("yellow");
    textSize(30);
    text("Population:" + population, 100,150);
    text("Literacy Rate:" + literacy, 100,200);
    text("Cleanliness:" + clean, 100, 250);
    text("Crime Rate:" + crime, 100,300)

    textSize(40);
    text("KERALA",320,50);

    fill("white");
    textSize(15);
    text("Increased use of chemical drugs in hospitals.",100,450);

    text("Police use more firepower against criminals", 100,500);
    text("Increased energy production", 100, 550);
    applyButton.visible = true;
    applyButton2.visible = true;
    applyButton3.visible = true;

    if(mousePressedOver(applyButton)){
      population++;
      clean--;
    }
    
    if(mousePressedOver(applyButton2)){
      crime = crime - 0.02;
      population = population - 0.002;
     }
    
    if(mousePressedOver(applyButton3)){
      clean = clean - 0.1;
      population = population + 0.2;
      literacy = literacy + 0.3;
      crime = crime - 0.2;
     }

     if(population === 35 && literacy === 100 && clean === 80 && crime === 700){
      gameState = "End";
    }
     
     if(gameState === "End"){
      text("Great! You have completed the game.",250, 200)
     }
  }



  drawSprites();
}
