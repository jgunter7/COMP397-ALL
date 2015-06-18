/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
// Framework variables
var stat;
var canvas = document.getElementById("mc");
var stage;
var assets;
var manifest = [
    { id: "bbutton", src: "img/bbutton.png" },
    { id: "clicked", src: "sound/clicked.wav" }
];
// Global Game Variables
var helloLabel;
var bbutton;
function init() {
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", gameloop);
    setupStats();
    main();
}
function setupStats() {
    stat = new Stats();
    stat.setMode(0);
    stat.domElement.style.position = 'absolute';
    stat.domElement.style.left = '320px';
    stat.domElement.style.top = '80px';
    document.body.appendChild(stat.domElement);
}
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
}
function ml() {
    canvas.style.backgroundColor = "grey";
}
function mb() {
    canvas.style.backgroundColor = "orange";
}
function gameloop() {
    stat.begin();
    helloLabel.text = "Hello World";
    canvas.onmouseleave = ml;
    canvas.onmouseover = mb;
    stage.update();
    stat.end();
}
function drawButton() {
    bbutton = new createjs.Bitmap(assets.getResult("bbutton"));
    bbutton.on("click", bbclick);
    bbutton.on("mouseover", bbover);
    bbutton.on("mouseout", bbout);
    stage.addChild(bbutton);
}
function main() {
    console.log("Game is running");
    drawButton();
    helloLabel = new createjs.Text("Hello World", "30px Consolas", "#000000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * .5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * .5;
    helloLabel.x = (canvas.clientWidth * .5);
    helloLabel.y = (canvas.clientHeight * .5) - helloLabel.getMeasuredHeight();
    stage.addChild(helloLabel);
}
function bbover() {
    bbutton.alpha = 0.8;
}
function bbout() {
    bbutton.alpha = 1.0;
}
function bbclick() {
    bbutton.alpha = 0.6;
    createjs.Sound.play("clicked");
}
//# sourceMappingURL=game.js.map