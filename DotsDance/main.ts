import {Character} from './Character'
import { Point } from './xyTuple';

let hello = document.getElementById("hello")!;

hello.innerText = 'Hello world!';

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext('2d')!;

const char1 = new Character();
const char2 = new Character();

const acc = new Point();
const vel = new Point();

let magnetOn = false;
let mouseX = 0;
let mouseY = 0;

function updateMouseAcc() {
    var rect = canvas.getBoundingClientRect();
    acc.x = mouseX - rect.left;
    acc.y = mouseY - rect.top;
    acc.minus(char1.position);
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
    char1.position.plus(vel);
    char1.draw(context);
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

document.addEventListener('keydown', (ev)=>{
    if (ev.keyCode == 65) {         // 'A'
        acc.x = -defaultAcc;
    } else if (ev.keyCode == 68) {  // 'D'
        acc.x = defaultAcc;
    } else if (ev.keyCode == 87) {  // 'W'
        acc.y = -defaultAcc;
    } else if (ev.keyCode == 83) {  // 'S'
        acc.y = defaultAcc;
    }
});

document.addEventListener('keyup', (ev)=>{
    if (ev.keyCode == 65) {         // 'A'
        acc.x = 0;
    } else if (ev.keyCode == 68) {  // 'D'
        acc.x = 0;
    } else if (ev.keyCode == 87) {  // 'W'
        acc.y = 0;
    } else if (ev.keyCode == 83) {  // 'S'
        acc.y = 0;
    }
});

requestAnimationFrame(gameLoop);