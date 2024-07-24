const app = new PIXI.Application();

document.body.appendChild(app.view);

const zookeeper = PIXI.Sprite.from('assets/zookeeper.png');
zookeeper.x = 350;
zookeeper.y = 440;
zookeeper.scale.x = 0.1;
zookeeper.scale.y = 0.1;
app.stage.addChild(zookeeper);

gameInterval(function(){
    const monkey = PIXI.Sprite.from('assets/ape' + random(1, 2) + '.png');
    monkey.x = random(0, 850);
    monkey.y = -25;
    monkey.scale.x = 0.08;
    monkey.scale.y = 0.08;
    app.stage.addChild(monkey);
    flyDown(monkey, 1);

    waitForCollision(zookeeper, monkey).then(function() {
        app.stage.removeChild(zookeeper);
        stopGame();
    })
}, 2000);
 
function leftKeyPressed(){
    zookeeper.x = zookeeper.x - 5;
}
 
function rightKeyPressed(){
    zookeeper.x = zookeeper.x + 5;
}

function spaceKeyPressed(){
    const banana = PIXI.Sprite.from('assets/banana.png');
    banana.x = zookeeper.x;
    banana.y = zookeeper.y;
    banana.scale.x = 0.06;
    banana.scale.y = 0.06;
    app.stage.addChild(banana);
}