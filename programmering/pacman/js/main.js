var bildriktning = 'h';

var GameState = {
    preload: function(){
        this.load.image('pacman', 'assets/pacman.png');
       
    },   
    create: function() {
        
        bild = this.add.sprite(0,100, 'pacman');
        bild.anchor.setTo(0.5);
        
        
        
    }, 
    update: function(){
        
        if(bildriktning=='h'){
            bild.x = bild.x+4;
            bild.scale.setTo(1,1);

        }else{
            bild.x = bild.x-4
            bild.scale.setTo(-1,1);
        }
        if(bild.x>725){
            bildriktning = 'v';
        }
        if(bild.x < 75 ){
            bildriktning = 'h'
        }
        
        
    }
};

//create a new game
var game = new Phaser.Game(800, 600, Phaser.AUTO);
//add the state
game.state.add('GameState', GameState); 
//start the game!
game.state.start('GameState');



