var canvas,backgroundImage;
var gameState=0;
var playerCount,dataBase,player,game;


function setup(){
    canvas=createCanvas(400,400);
    database=fireBase.database();
    game=new Game();
    game.getState();
    game.start();
}


function draw(){
background("blue")
}