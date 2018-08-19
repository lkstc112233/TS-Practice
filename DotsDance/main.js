define(["require", "exports", "./Character", "./xyTuple"], function (require, exports, Character_1, xyTuple_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var hello = document.getElementById("hello");
    hello.innerText = 'Hello world!';
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');
    var char1 = new Character_1.Character();
    var char2 = new Character_1.Character();
    var acc = new xyTuple_1.Point();
    var vel = new xyTuple_1.Point();
    function gameLoop() {
        requestAnimationFrame(gameLoop);
        context.clearRect(0, 0, canvas.width, canvas.height);
        vel.plus(acc);
        char1.position.plus(vel);
        char1.draw(context);
    }
    document.addEventListener('keydown', function (ev) {
        if (ev.keyCode == 65) { // 'A'
            acc.x = -0.01;
        }
        else if (ev.keyCode == 68) { // 'D'
            acc.x = 0.01;
        }
        else if (ev.keyCode == 87) { // 'W'
            acc.y = -0.01;
        }
        else if (ev.keyCode == 83) { // 'S'
            acc.y = 0.01;
        }
    });
    document.addEventListener('keyup', function (ev) {
        if (ev.keyCode == 65) { // 'A'
            acc.x = 0;
        }
        else if (ev.keyCode == 68) { // 'D'
            acc.x = 0;
        }
        else if (ev.keyCode == 87) { // 'W'
            acc.y = 0;
        }
        else if (ev.keyCode == 83) { // 'S'
            acc.y = 0;
        }
    });
    requestAnimationFrame(gameLoop);
});
