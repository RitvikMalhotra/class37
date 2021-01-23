class Form{
    constructor(){
        this.input = createInput("name")
        this.button = createButton("play")
        this.greeting = createElement("h3")
    } 
    hide(){
        this.greeting.hide()
        this.input.hide()
        this.button.hide()
        }

    display(){
        var title = createElement("h2")
        title.html("carRacingGame")
        title.position(200,0);
        this.input.position(200,100)
        this.button.position(200,200)
        this.button.mousePressed(function(){
            //this.input.hide()
            //this.button.hide()
            player.name = this.input.value()
             playerCount = playerCount + 1
             player.index = playerCount;
             player.update()
             player.updateCount(playerCount)
             this.greeting.html("hello " + player.name)
             this.greeting.position(200,300)
        }) 

    } 

    
}

