var gameState=0;
var allPlayers;
 var playerCount,database,form,player,game
var cars,car1,car2,car3,car4;
 function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    game=new Game();
    game.getState();
    game.start();
    
}
    



function draw(){

if(playerCount===4){

    game.update(1);


}
if(gameState===1){

    clear();
    game.Play();

    
}


}


