class Player {
    constructor(){
        
   
    }
    getCount(){
        var playerCountRef=database.ref('playerCount');
   
        playerCountRef.on("value",function(data){ 
            playerCount=data.val();})
    }
    updateCount(Count){
        database.ref('/').update({ 
            playerCount:Count
        });
    }
    Update(name){
        var playerIndex="jugador"+playerCount;
        dataBase.ref(playerIndex).set({
            name:name
        });
    }
   
   
   }