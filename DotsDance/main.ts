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

function gameLoop() {
    requestAnimationFrame(gameLoop);
    context.clearRect(0, 0, canvas.width, canvas.height);
    vel.plus(acc);
    vel.mul(0.95);
    char1.position.plus(vel);
    char1.draw(context);
}

const defaultAcc = 0.1;

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