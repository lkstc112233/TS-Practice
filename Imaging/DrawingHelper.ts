import { Images, ImagesLoaded } from './Images';

export function circle(context: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string | CanvasGradient | CanvasPattern) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
}

export function drawImage(context: CanvasRenderingContext2D, image: keyof typeof Images, row: number, column: number, x: number, y: number, size: number) {
    context.drawImage(ImagesLoaded[image], row * 16, column * 16, 16, 16, x, y, size, size);
}