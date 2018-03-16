var bitar, bit;

var GameState = {
    preload: function(){
        this.load.image('grid', 'assets/grid.png');
        this.load.image('b0', 'assets/b0.png');
        this.load.image('b1', 'assets/b1.png');
        this.load.image('b2', 'assets/b2.png');
        this.load.image('b3', 'assets/b3.png');
        this.load.image('b4', 'assets/b4.png');
        this.load.image('b5', 'assets/b5.png');
        this.load.image('b6', 'assets/b6.png');
        this.load.image('b7', 'assets/b7.png');
        this.load.image('b8', 'assets/b8.png');
       
    },   
    create: function() {
        
        bild = this.add.sprite( 0 , 0 , 'grid');
        
        bitar= game.add.group();
        bitar.inputEnableChildren = true;
        
        var rx, ry;
        for (var i =0; i < 9; i++){
            
            rx = game.world.randomX-136;
            
            if(rx<0){
                rx=0
            }
            
            ry = game.world.randomY-96;
            
            if(ry>400){
                ry=304
            }
            
            bit = bitar.create(rx,ry,'b'+i);
            bit.input.enableDrag();
            bit.input.enableSnap(136,96);
            
            
        
           
            console.log('b'+ i+ '.x:' + bit.x);
        }
        
    }, 
    update: function(){
        if(bitar.getAt(0).x == 0 && bitar.getAt(0).y ==0){
            
        this.game.state.start("GameOver")
            
        }
    }
};