define(["require", "exports", "./Character"], function (require, exports, Character_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var hello = document.getElementById("hello");
    hello.innerText = 'Hello world!';
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');
    var angle = 0;
    var centerX = 200;
    var centerY = 200;
    var radius = 100;
    var count = 1;
    var char1 = new Character_1.Character();
    var char2 = new Character_1.Character();
    function drawLine(count) {
        if (count === void 0) { count = 1; }
        context.beginPath();
        context.lineWidth = 10;
        if (count > 30) {
            context.lineWidth = 3;
        }
        var step = Math.PI * 2 / count;
        for (var i = 0; i < count; ++i) {
            context.moveTo(centerX, centerY);
            context.lineTo(centerX + radius * Math.cos(angle + step * i), centerY + radius * Math.sin(angle + step * i));
        }
        context.stroke();
    }
    function gameLoop() {
        requestAnimationFrame(gameLoop);
        angle += Math.PI / 60;
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawLine(count);
        char1.draw(context);
    }
    canvas.addEventListener("mousemove", function (ev) {
        var rect = canvas.getBoundingClientRect();
        centerX = ev.clientX - rect.left;
        centerY = ev.clientY - rect.top;
    });
    document.addEventListener('keydown', function (ev) {
        if (ev.keyCode == 65) { // 'A'
            char1.x -= 3;
        }
        if (ev.keyCode == 68) { // 'D'
            char1.x += 3;
        }
        if (ev.keyCode == 87) { // 'W'
            char1.y -= 3;
        }
        if (ev.keyCode == 83) { // 'S'
            char1.y += 3;
        }
        console.log(ev.keyCode);
    });
    requestAnimationFrame(gameLoop);
});
