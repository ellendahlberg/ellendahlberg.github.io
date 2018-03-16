//create a new state
var x = 0;
var y = 0;
var bild;

var GameState = {
    preload: function(){
        this.load.image('svart', 'assets/svart.png');
        this.load.image('vit', 'assets/vit.png');

    },   
    create: function () {
        
        this.stage.backgroundColor ='#672903';
        var spelplan = [
            ['v','s','s','s','s','s'],   
            ['v','s','s','v','v','v'],         
            ['v','v','s','v','s','v'],        
            ['s','v','s','v','s','v'],         
            ['s','v','v','v','s','v'],         
            ['s','s','s','s','s','s']  
        ];
        var rad = spelplan.length;
        var kol = spelplan[0].length;
        
        console.log(rad);
        console.log(kol);
        
        for(var r = 0; r < rad; r++){
        this.rita(spelplan[r][0],x,y);
        x = x+100;
        y = y+100;
    
}        
    }, 
    rita: function(kod,x,y,){
        if(kod == "s"){
            bild="svart";  
        }
        else{
            bild="vit";
            
        }
        this.add.sprite(x, y, bild);
    }

};

//create a new game
var game = new Phaser.Game(800, 600, Phaser.AUTO);
//add the state
game.state.add('GameState', GameState); 
//start the game!
game.state.start('GameState');



