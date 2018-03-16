var game = new Phaser.Game(700,400, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.add('GameOver', GameOver);

game.state.start('GameState');



