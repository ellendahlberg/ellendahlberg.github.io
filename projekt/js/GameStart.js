var GameStart = {
    preload: function(){
        this.load.image('monkey','assets/monkey.png');
        this.load.image('platform','assets/platform.jpg');
        this.load.image('play', 'assets/playbutt.png');
        this.load.audio('knack',['assets/knack.m4a','assets/knack.ogg']);
        this.load.image('bomb', 'assets/bomb.png');
        this.load.image('gras', 'assets/plat1.png');
        this.load.image('banan', 'assets/banan.png');
        this.load.image('undo', 'assets/undo.png');
        this.load.image('back', 'assets/back.png');
        
    },
    create: function(){
        this.add.tileSprite( 0, 0 , 800 , 1000 , 'platform');
    
        
        var namn = this.add.text(game.world.centerX, 200, 'Hur spelar man', {fontSize: '55px', fill: '#fff'});
        namn.anchor.setTo(0.5);
        
        var namn1 = this.add.text(game.world.centerX, 260, 'Använd piltangenterna', {fontSize: '50px', fill: '#fff'});
        namn1.anchor.setTo(0.5);
        
        
        var button = game.add.button(game.world.centerX,game.world.centerY, 'play');
        button.anchor.setTo(0.5);
        
        knackljud = this.add.audio('knack');
        button.events.onInputDown.add(this.knacka);
        
        
        //Lägger till start av GameState
        button.events.onInputUp.add(function(){
            this.state.start('GameState', true, false);
        },this);
        
    
        
    },
        knacka :function(){
         knackljud.play();   
        }
};