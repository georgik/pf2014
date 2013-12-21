
var canvas, stage;

var mouseTarget;	// the display object currently under the mouse, or being dragged
var dragStarted;	// indicates whether we are currently in a drag operation
var offset;
var update = true;

function init() {

    document.getElementById("loader").className = "loader";
    // create stage and point it to the canvas:
    canvas = document.getElementById("testCanvas");
    canvas.width = screen.width;
    canvas.height = screen.height;
    console.log("Canvas width:" + canvas.width);
    console.log("Canvas height:" + canvas.height);

    //check to see if we are running in a browser with touch support
    stage = new createjs.Stage(canvas);

    // enable touch interactions if supported on the current device:
    createjs.Touch.enable(stage);

    // enabled mouse over / out events
    stage.enableMouseOver(10);
    stage.mouseMoveOutside = false; // keep tracking the mouse even when it leaves the canvas

    // load the source image:
    var image = new Image();
    image.src = "img/daisy.png";
    image.onload = handleImageLoad;
}

function stop() {
    createjs.Ticker.removeEventListener("tick", tick);
}

function handleImageLoad(event) {
    var image = event.target;
    var bitmap;
    var container = new createjs.Container();
    stage.addChild(container);

    // create a shape that represents the center of the daisy image:
    var hitArea = new createjs.Shape();
    hitArea.graphics.beginFill("#FFF").drawEllipse(-11,-14,24,18);
    // position hitArea relative to the internal coordinate system of the target bitmap instances:
    hitArea.x = image.width/2;
    hitArea.y = image.height/2;

    // create and populate the screen with random daisies:
    for(var i = 0; i < 20; i++){
        bitmap = new createjs.Bitmap(image);
        container.addChild(bitmap);
        bitmap.x = canvas.width * Math.random()|0;
        bitmap.y = canvas.height * Math.random()|0;
        bitmap.rotation = 360 * Math.random()|0;
        bitmap.regX = bitmap.image.width/2|0;
        bitmap.regY = bitmap.image.height/2|0;
        bitmap.scaleX = bitmap.scaleY = bitmap.scale = Math.random()*0.4+0.6;
        bitmap.name = "bmp_"+i;
        bitmap.cursor = "pointer";

        // assign the hit area:
        bitmap.hitArea = hitArea;

        bitmap.addEventListener("mousedown", function(evt) {
            // bump the target in front of its siblings:
            var o = evt.target;
            o.parent.addChild(o);
            o.offset = {x:o.x-evt.stageX, y:o.y-evt.stageY};
        });

        // the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
        bitmap.addEventListener("pressmove", function(evt) {
            var o = evt.target;
            o.x = evt.stageX+ o.offset.x;
            o.y = evt.stageY+ o.offset.y;
            // indicate that the stage should be updated on the next tick:
            update = true;
        });

        bitmap.addEventListener("rollover", function(evt) {
            var o = evt.target;
            o.scaleX = o.scaleY = o.scale*1.2;
            update = true;
        });

        bitmap.addEventListener("rollout", function(evt) {
            var o = evt.target;
            o.scaleX = o.scaleY = o.scale;
            update = true;
        });

    }

    document.getElementById("loader").className = "";
    createjs.Ticker.addEventListener("tick", tick);
}

function tick(event) {
    // this set makes it so the stage only re-renders when an event handler indicates a change has happened.
    if (update) {
        update = false; // only update once
        stage.update(event);
    }
}
