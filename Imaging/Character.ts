import { Point } from './xyTuple';
import { circle } from './DrawingHelper';

export class Character {
    private frame = 0;
    position = new Point();

    draw(context: CanvasRenderingContext2D) {
        const radius = 25;
        this.frame += Math.PI / 60;
        
        circle(context, this.position.x, this.position.y, radius, 'black');
    }
}