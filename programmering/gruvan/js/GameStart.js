var GameStart = {
    preload: function(){
        this.load.image('background','assets/rocks.png');
        this.load.image('platform','assets/sten.png');
        this.load.image('boll', 'assets/boll.png');
        this.load.image('play', 'assets/playbutt.png');
    },
    create: function(){
        this.add.tileSprite( 0, 0 , 800 , 1000 , 'background');
        
        var namn = this.add.text(game.world.centerX, 200, 'Gruvan', {fontSize: '55px', fill: '#fff'});
        namn.anchor.setTo(0.5);
        
        
        var button = game.add.button(game.world.centerX,game.world.centerY, 'play');
        button.anchor.setTo(0.5);
        
        //Lägger till start av GameState
        button.events.onInputUp.add(function(){
            this.state.start('GameState', true, false);
        },this);
        
    }
};