import { Character } from './Character'
import { Point } from './xyTuple';
import { Controller } from './Controller';

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext('2d')!;

const char = new Character();
const controller = new Controller();

const vel = new Point();

function gameLoop() {
    requestAnimationFrame(gameLoop);
    context.clearRect(0, 0, canvas.width, canvas.height);
    const acc = controller.getControllerValue();
    acc.mul(0.3);
    vel.plus(acc);
    vel.mul(0.97);
    char.position.plus(vel);
    char.draw(context);
    controller.draw(context);
}

const defaultAcc = 0.1;

canvas.addEventListener("touchmove",(ev) => {
    var rect = canvas.getBoundingClientRect();
    var x = ev.touches[0].clientX - rect.left;
    var y = ev.touches[0].clientY - rect.top;
    controller.touchUpdate(new Point(x, y));
});

canvas.addEventListener("touchstart", (ev) => {
    if (ev.touches.length == 1) {
        var rect = canvas.getBoundingClientRect();
        var x = ev.touches[0].clientX - rect.left;
        var y = ev.touches[0].clientY - rect.top;
        controller.touchBegin(new Point(x, y));
    }
});

canvas.addEventListener("touchend", (ev) => {
    if (ev.touches.length == 0) {
        controller.touchEnd();
    }
});

canvas.addEventListener("mousemove",(ev) => {
    var rect = canvas.getBoundingClientRect();
    var x = ev.clientX - rect.left;
    var y = ev.clientY - rect.top;
    controller.touchUpdate(new Point(x, y));
});

canvas.addEventListener("mousedown", (ev) => {
    if (ev.button == 0) {
        var rect = canvas.getBoundingClientRect();
        var x = ev.clientX - rect.left;
        var y = ev.clientY - rect.top;
        controller.touchBegin(new Point(x, y));
    }
});

canvas.addEventListener("mouseup", (ev) => {
    if (ev.button == 0) {
        controller.touchEnd();
    }
});

requestAnimationFrame(gameLoop);