class Game{
constructor(){}

getState(){
var gameStateRef = database.ref("gameState");
gameStateRef.on("value", function(data){
    gameState = data.val()
})
}

update(state){
database.ref('/').update({gameState: state})


}

start(){
if (gameState == 0){
    player = new Player()
    player.getCount();
    form = new Form()
    form.display()
}
}

play(){
text("press space key to start", 200,200)
if (keyDown == "32"){
    form.hide()
    Player.getPlayerInfo()
    if (allPlayers != undefined ){
        var displayPosition = 20
        for (var p in allPlayers){
            if (p == "player" + player.index){
                fill("red")
            }
            else {
                fill("black")
            }
            displayPosition = displayPosition + 20
            text(allPlayers[p].name + ": " + allPlayers[p].distance, 120, displayPosition)
        }
    }
}

}
}