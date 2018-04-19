
var antal = 10;
var GameState = {  
    create: function() {
        //Stääler in backrundfärg och bilder
        this.add.sprite( 0 , 0, 'back');
         
        this.stage.backgroundColor = '#ffffff'
        
        platform = this.add.sprite(20,650,'platform');
        platform2 = this.add.sprite(450,350, 'gras');
        platform3 = this.add.sprite(20,400, 'gras');
        platform4 = this.add.sprite(300,100, 'gras');
        monkey = this.add.sprite(200,20, 'monkey');
        
        //Skapar bananer och dess fysik
        bananer = game.add.group();

        for (var i = 0; i < 10; i++)
        {  
            this.banan = bananer.create(Math.random() * 500, Math.random() * 500 , 'banan');
    
        }
        
        bananer.enableBody = true;
        bananer.allowGravity = true;
        bananer.immovable = true;
        
     
        //Ställ in fysik
        this.physics.enable([monkey, platform, platform2, bananer, platform3, platform4], Phaser.Physics.ARCADE);
        monkey.body.bounce.y = 0.95 ;
        monkey.body.gravity.y = 450;
        
        
        //Hindra plattformar att röra sig 
        platform.body.allowGravity = false;
        platform.body.immovable = true;
        
        platform3.body.allowGravity = false;
        platform3.body.immovable = true;
        
        platform4.body.allowGravity = false;
        platform4.body.immovable = true;
        
        platform2.body.allowGravity = false;
        platform2.body.immovable = true;
      
        
        
        //Ställ in tangentera
        pil = this.input.keyboard.createCursorKeys();
        jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
      
        },
    
        update: function(){
        
         this.physics.arcade.overlap(monkey, bananer, this.collisionHandler);
        
         if(pil.right.isDown){
             monkey.x += 2; 
         }else if(pil.left.isDown){
             monkey.x -= 2;
         }
            this.physics.arcade.collide(monkey, [platform, platform2, platform3, platform4] );

            if(jumpButton.isDown && monkey.body.touching.down){
                monkey.body.velocity.y = -500;
        }
  
        },
        collisionHandler: function  (monkey, banan) {

    // Dödar apan
        banan.kill();
        antal = antal-1;
        console.log(antal)
        if(antal == 0){
        game.state.start('level2');
        }
    }
};