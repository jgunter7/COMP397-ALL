// Framework variables
var canvas = document.getElementById("mc");
var stage;
var assets;
// Global Game Variables
var helloLabel;
var gamec = 0.1;
var bbutton;
function init() {
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", gameloop);
    main();
}
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest([
        { id: "bbutton", src: "img/bbutton.png" },
        { id: "clicked", src: "sound/clicked.wav" }
    ]);
}
function ml() {
    canvas.style.backgroundColor = "grey";
}
function mb() {
    canvas.style.backgroundColor = "orange";
}
function gameloop() {
    gamec += 0.02;
    helloLabel.text = "Count: " + gamec.toFixed(1);
    canvas.onmouseleave = ml;
    canvas.onmouseover = mb;
    stage.update();
}
function drawButton() {
}
function main() {
    console.log("Game is running");
    var img1 = new Image();
    img1.src = "/img/bbutton.png";
    img1.onload = drawButton;
    bbutton = new createjs.Bitmap(assets.getResult("bbutton"));
    helloLabel = new createjs.Text("Hello World", "30px Consolas", "#000000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * .5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * .5;
    helloLabel.x = (canvas.clientWidth * .5);
    helloLabel.y = (canvas.clientHeight * .5) - helloLabel.getMeasuredHeight();
    stage.addChild(helloLabel);
    stage.addChild(bbutton);
    bbutton.on("click", bbclick);
    bbutton.on("mouseover", bbover);
    bbutton.on("mouseout", bbout);
}
function bbover() {
    bbutton.alpha = 0.8;
}
function bbout() {
    bbutton.alpha = 1.0;
}
function bbclick() {
    createjs.Sound.play("clicked");
}
//# sourceMappingURL=game.js.map