
var GameState = {  
    create: function() {
        
        this.add.sprite( 0 , 0 , 'background');

        var namn=(prompt('Hej skriv något...'));
        
        this.bakfram(namn);
        
        console.log(namn);
        
        var restart = game.add.button(game.world.centerX-100,game.world.centerY+100, 'restart');
        restart.anchor.setTo(0.5);
        
        //Lägger till start av GameState
        restart.events.onInputUp.add(function(){
            this.state.start('GameStart', true, false);
        },this);
        
        var end = game.add.button(game.world.centerX+100,game.world.centerY+100, 'end');
        end.anchor.setTo(0.5);
        
        //Lägger till start av GameState
        end.events.onInputUp.add(function(){
            this.state.start('GameOver', true, false);
        },this);
        
    },
    bakfram: function(old){
        var ny = [];
        for(var i = old.length-1; i>= 0; i--){
           
        if(old [i]==' '){
            ny.push('_');
        }
        else {
            ny.push(old[i]);
        }
        
        }
        
    text= game.add.text(game.world.centerX,game.world.centerY, 'Nu är det:'+ ny.join(''),{fill:'#fff'});
    text.anchor.setTo(0.5);
    
    text1 = game.add.text(game.world.centerX,game.world.centerY+30, 'Innan var det:'+ old, {fill: '#fff'});
    text1.anchor.setTo(0.5)
        
    }
};