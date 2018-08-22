import {Point} from './xyTuple'

export class Character {
    private frame = 0;
    position = new Point();

    draw(context: CanvasRenderingContext2D) {
        const radius = 50;
        this.frame += Math.PI / 60;
        
        context.fillRect(this.position.x - radius / 2, this.position.y - radius / 2, radius, radius);
    }
}