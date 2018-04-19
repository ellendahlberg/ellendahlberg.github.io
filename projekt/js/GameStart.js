var GameStart = {
    preload: function(){
        
        //Lägger till bilder
        
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
    
        //Lägger till text
        
        var namn = this.add.text(game.world.centerX, 200, 'Samla bananer', {fontSize: '55px', fill: '#fff'});
        namn.anchor.setTo(0.5);
        
        var namn1 = this.add.text(game.world.centerX, 260, 'Använd piltangenterna', {fontSize: '50px', fill: '#fff'});
        namn1.anchor.setTo(0.5);
        
        var namn2 = this.add.text(game.world.centerX, 440, 'Ellen Dahlberg', {fontSize: '25px', fill: '#fff'});
        namn2.anchor.setTo(0.5);
        
        var namn3 = this.add.text(game.world.centerX, 490, 'Ullvigymnasiet 2018', {fontSize: '25px', fill: '#fff'});
        namn3.anchor.setTo(0.5);
        
        var namn4 = this.add.text(game.world.centerX, 540, 'Licensfria bilder från pixabay.com', {fontSize: '25px', fill: '#fff'});
        namn4.anchor.setTo(0.5);
        
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