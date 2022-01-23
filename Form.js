class Form{
    constructor(){
    
    }
    display(){
        var title=createElement('h2');
        title.html("juego de carreras");
        title.position(250,0);
        var imput=createImput('name');
        var button=createButton('play');
        var greeting=createElement('h3');
        imput.position(250,160);
        button.position(350,200);
        button.mousePressed(function(){
            imput.hide();
            button.hide();
            var name=imput.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("hola"+name);
            greeting.position(300,160)
        });
        }
}