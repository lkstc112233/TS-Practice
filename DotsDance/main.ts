import {Character} from './Character'

let hello = document.getElementById("hello")!;

hello.innerText = 'Hello world!';

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext('2d')!;

const char1 = new Character();
const char2 = new Character();

function gameLoop() {
    requestAnimationFrame(gameLoop);
    context.clearRect(0, 0, canvas.width, canvas.height);
    char1.draw(context);
}

document.addEventListener('keydown', (ev)=>{
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