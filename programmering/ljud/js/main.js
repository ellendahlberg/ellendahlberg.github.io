
var GameState = {
    preload: function(){
        this.load.audio('bgmusik', ['assets/bgmusik.ogg', 'assets/bgmusik.mp3']);
        this.load.audio('knack', ['assets/knack.ogg', 'assets/knack.m4a']);
        this.load.image('bomb', 'assets/bomb.png');
        this.load.image('play', 'assets/playbutt.png');
       
    },   
    create: function() {
        
        monkey = this.add.sprite(200,20, 'monkey');
        monkey.inputEnabled = true
        
        //bild.anchor.setTo(0.5);
        
        musik = this.add.audio('bgmusik');
        musik.play();
        
        knackljud = this.add.audio('knack');
        play.events.onInputDown.add(this.knacka);
        /*
        
        bird = this.add.sprite(100,100, 'bird');
        bird.animations.add('flyg-h',[0,1,2,3,4,5,6,7],10,true);
        bird.animations.add('flyg-v',[8,9,10,11,12,13,14,15],10,true);
        bird.animations.add('flyg-u',[0,1,2,3],20, true);
        bird.animations.add('flyg-n',[0,1],5,true);
        
        bird.animations.play('flyg-u');
        
        */
    }, 
    update: function(){
       /* 
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
        */
        
        
    },
    knacka :function(){
         knackljud.play();   
        }
};

//create a new game
var game = new Phaser.Game(800, 600, Phaser.AUTO);
//add the state
game.state.add('GameState', GameState); 
//start the game!
game.state.start('GameState');



