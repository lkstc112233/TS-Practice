import {Character} from './Character'
import { Point } from './xyTuple';
import { Controller } from './Controller';

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext('2d')!;

const char = new Character();
const controller = new Controller();

const acc = new Point();
const vel = new Point();

let magnetOn = false;
let mouseX = 0;
let mouseY = 0;

function updateMouseAcc() {
    var rect = canvas.getBoundingClientRect();
    acc.x = mouseX - rect.left;
    acc.y = mouseY - rect.top;
    acc.minus(char.position);
    acc.normalize();
    acc.mul(0.15);
}

function gameLoop() {
    requestAnimationFrame(gameLoop);
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (magnetOn) {
        updateMouseAcc();
    } else {
        acc.zero();
    }
    vel.plus(acc);
    vel.mul(0.97);
    char.position.plus(vel);
    char.draw(context);
}

const defaultAcc = 0.1;

canvas.addEventListener("mousemove",(ev) => {
    mouseX = ev.clientX;
    mouseY = ev.clientY;
});

canvas.addEventListener("mousedown", (ev) => {
    if (ev.button == 0) {
        magnetOn = true;
    }
});

canvas.addEventListener("mouseup", (ev) => {
    if (ev.button == 0) {
        magnetOn = false;
    }
});

requestAnimationFrame(gameLoop);