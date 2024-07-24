const app = new PIXI.Application();

document.body.appendChild(app.view);

const zookeeper = PIXI.Sprite.from('assets/zookeeper.png');

zookeeper.scale.x = 0.05;
zookeeper.scale.y = 0.05;
app.stage.addChild(zookeeper);