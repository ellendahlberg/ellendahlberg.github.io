var text;
var level2 = {
    create: function () {
          
        antal = 7;
        
        //Lägger till bilder
        
        this.add.sprite( 0 , 0, 'back');
        platform = this.add.sprite(20,650,'platform');
        platform2 = this.add.sprite(450,350, 'gras');
        platform3 = this.add.sprite(20,400, 'gras');
        platform4 = this.add.sprite(300,100, 'gras');
        monkey = this.add.sprite(200,20, 'monkey');
        bomb1 = this.add.sprite(20,-10, 'bomb');
        bomb2 = this.add.sprite(80,-20, 'bomb');
        bomb3 = this.add.sprite(160,-30, 'bomb');
        bomb4 = this.add.sprite(300,-40, 'bomb');
        bomb5 = this.add.sprite(500,-20, 'bomb');
        bomb6 = this.add.sprite(710,-30, 'bomb');
        
        //Ställer in bananerna och dess fysik
        
        bananer = game.add.group();

   for (var i = 0; i < 7; i++)
        {  
            this.banan = bananer.create(Math.random() * 500, Math.random() * 500 , 'banan');
    
        }
        
        bananer.enableBody = true;
        bananer.allowGravity = true;
        bananer.immovable = true;
        
    
     
        //Ställ in fysik
        this.physics.enable([monkey, platform, platform2, bananer, platform3, platform4, bomb1, bomb2, bomb3, bomb4, bomb4, bomb5, bomb6], Phaser.Physics.ARCADE);
        monkey.body.bounce.y = 0.95 ;
        monkey.body.gravity.y = 450;
        
        //Få bomberna att sakta åka ner
        
        bomb1.enableBody = true;
        bomb1.allowGravity = true;
        bomb1.body.gravity.y = 20;
        
        bomb2.enableBody = true;
        bomb2.allowGravity = true;
        bomb2.body.gravity.y = 20;
        
        bomb3.enableBody = true;
        bomb3.allowGravity = true;
        bomb3.body.gravity.y = 20;
        
        bomb4.enableBody = true;
        bomb4.allowGravity = true;
        bomb4.body.gravity.y = 20;
        
        bomb5.enableBody = true;
        bomb5.allowGravity = true;
        bomb5.body.gravity.y = 20;
        
        bomb6.enableBody = true;
        bomb6.allowGravity = true;
        bomb6.body.gravity.y = 20;

        
        
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
        
        bomb1.y = bomb1.y+1;
        bomb2.y = bomb2.y+1;
        bomb3.y = bomb3.y+1;
        bomb4.y = bomb4.y+1;
        bomb5.y = bomb5.y+1;
        bomb6.y = bomb6.y+1;
        
        //Skapar kollison mellan apan, bananer och bomber
        
        this.physics.arcade.overlap(monkey, bananer, this.collisionHandler);
        this.physics.arcade.overlap(monkey, bomb1, this.bombHandler);
        this.physics.arcade.overlap(monkey, bomb2, this.bombHandler);
        this.physics.arcade.overlap(monkey, bomb3, this.bombHandler);
        this.physics.arcade.overlap(monkey, bomb4, this.bombHandler);
        this.physics.arcade.overlap(monkey, bomb5, this.bombHandler);
        this.physics.arcade.overlap(monkey, bomb6, this.bombHandler);
        
        //Styr apan
        
            if(pil.right.isDown){
                monkey.x += 2; 
            }else if(pil.left.isDown){
                monkey.x -= 2;
            }
        
            
            this.physics.arcade.collide(monkey, [platform, platform2, platform3, platform4] );

            if(jumpButton.isDown && monkey.body.touching.down){
                monkey.body.velocity.y = -500;
            }

            if(monkey.y > game.world.height){
                this.state.start('GameOver', true, false);
            }
         
            },
    collisionHandler: function  (monkey, banan) {

    //Dödar apan 
        banan.kill();
        antal = antal-1;
        console.log(antal);
            if(antal == 0){
                var stil = {font:'70px Arial', fill: '#0f0'}
                text = game.add.text(game.world.centerX, game.world.centerY,'Grattis', stil);
                text.anchor.setTo(0.5);
        
            }
            },
    bombHandler: function  (monkey, bomb1, bomb2, bomb3, bomb4, bomb5, bomb6) {

        game.state.start('GameOver', true, false);
    }     
};