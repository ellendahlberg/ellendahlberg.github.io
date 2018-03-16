var GameOver = {
    create: function(){
        console.log("Hurra 2");
        text = this.game.add.text(game.world.centerX, game.world.centerY, "-THE END-");
        
        text.anchor.set(0.5);
        text.align = 'center';
        
        text.font = 'Arial';
        text.fontWeight = 'bold';
        text.fontSize = 70;
        text.fill = '#ffaaaa';
  }
};