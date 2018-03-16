var player1 = {
    x: 150,
    y: 100,
    points: 200,
    speed: 300,
    addPoint: function (newpoint) {
        this.points = this.points+newpoint;
        this.speed = this.speed-newpoint;
    }
};
[
console.log(player1);
player1.addPoint(10);
console.log(player1);

]