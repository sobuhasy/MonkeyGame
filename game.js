const app = new PIXI.Application();

document.body.appendChild(app.view);

const zookeeper = PIXI.Sprite.from('assets/zookeeper.png');
zookeeper.x = 350;
zookeeper.y = 440;
zookeeper.scale.x = 0.1;
zookeeper.scale.y = 0.1;
app.stage.addChild(zookeeper);

gameInterval(function(){
    const monkey = PIXI.Sprite.from('assets/monkey.png');
    monkey.x = random(0, 1000);
    monkey.y = -25;
    monkey.scale.x = 0.08;
    monkey.scale.y = 0.08;
    app.stage.addChild(monkey);
    flyDown(monkey, 1);
}, 1000);

function leftKeyPressed(){
    zookeeper.x = zookeeper.x - 5;
}

function rightKeyPressed(){
    zookeeper.x = zookeeper.x + 5;
}