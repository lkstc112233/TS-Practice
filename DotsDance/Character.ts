import {Point} from './xyTuple'

export class Character {
    private frame = 0;
    position = new Point();

    draw(context: CanvasRenderingContext2D) {
        // const radius = Math.sin(this.frame) * 20 + 50;
        const radius = 50;
        this.frame += Math.PI / 60;
        
        // context.ellipse(this.x, this.y, radius, radius, 0, 0, Math.PI);
        context.fillRect(this.position.x, this.position.y, radius, radius);
    }
}