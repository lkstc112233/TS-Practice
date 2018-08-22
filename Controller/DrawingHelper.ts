export function circle(context: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string | CanvasGradient | CanvasPattern) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
}