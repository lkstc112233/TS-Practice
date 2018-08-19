import {Character} from './Character'

let hello = document.getElementById("hello")!;

hello.innerText = 'Hello world!';

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext('2d')!;

let angle = 0;
let centerX = 200;
let centerY = 200;
const radius = 100;

let count = 1;

const char1 = new Character();
const char2 = new Character();

function drawLine(count:number = 1) {
    context.beginPath();
    context.lineWidth = 10;
    if (count > 30) {
        context.lineWidth = 3;
    }
    const step = Math.PI * 2 / count;
    for (let i = 0; i < count; ++i) {
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

canvas.addEventListener("mousemove",(ev) => {
    var rect = canvas.getBoundingClientRect();
    centerX = ev.clientX - rect.left;
    centerY = ev.clientY - rect.top;
});

document.addEventListener('keydown', (ev)=>{
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