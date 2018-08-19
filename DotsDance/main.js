define(["require", "exports", "./Character"], function (require, exports, Character_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var hello = document.getElementById("hello");
    hello.innerText = 'Hello world!';
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');
    var char1 = new Character_1.Character();
    var char2 = new Character_1.Character();
    function gameLoop() {
        requestAnimationFrame(gameLoop);
        context.clearRect(0, 0, canvas.width, canvas.height);
        char1.draw(context);
    }
    document.addEventListener('keydown', function (ev) {
        if (ev.keyCode == 65) { // 'A'
            char1.position.x -= 3;
        }
        if (ev.keyCode == 68) { // 'D'
            char1.position.x += 3;
        }
        if (ev.keyCode == 87) { // 'W'
            char1.position.y -= 3;
        }
        if (ev.keyCode == 83) { // 'S'
            char1.position.y += 3;
        }
    });
    requestAnimationFrame(gameLoop);
});
