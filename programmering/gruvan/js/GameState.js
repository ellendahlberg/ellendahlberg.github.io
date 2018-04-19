
var GameState = {  
    create: function() {
        
        this.add.tileSprite( 0 , 0 , 800 , 1000, 'background');
        platform1 = this.add.sprite(20,300,'platform');
        platform2 = this.add.sprite(400,500, 'platform')
        boll = this.add.sprite(200,20, 'boll')
     
        //Ställ in fysik
        this.physics.enable([boll, platform1, platform2], Phaser.Physics.ARCADE);
        boll.body.bounce.y = 0.8;
        boll.body.gravity.y = 600;
        
        //Hindra plattformar att röra sig 
        platform1.body.allowGravity = false;
        platform1.body.immovable = true;
        platform2.body.allowGravity = false;
        platform2.body.immovable = true;
        
        //Ställ in tangentera
        pil = this.input.keyboard.createCursorKeys();
        jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
    },
    
    update: function(){
        
     if(pil.right.isDown){
         boll.x += 2; 
     }else if(pil.left.isDown){
         boll.x -= 2;
     }
        this.physics.arcade.collide(boll, [platform1, platform2]);
        
        if(jumpButton.isDown && boll.body.touching.down){
            boll.body.velocity.y = -500;
        }
        
        if(boll.y > game.world.height){
            this.state.start('GameOver', true, false);
        }
        
        
    }
};