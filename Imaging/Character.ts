import { Point } from './xyTuple';
import { circle, drawImage } from './DrawingHelper';
import { Images } from './Images';

export class Character {
    private frame = 0;
    position = new Point();
    velocity = new Point();

    draw(context: CanvasRenderingContext2D) {
        // Update status
        this.velocity.mul(0.97);
        this.position.plus(this.velocity);

        // Draw spirit
        const size = 40;
        this.frame += Math.PI / 60;

        drawImage(context, 'BODY', 0, this.velocity.direction, this.position.x, this.position.y, size);
        drawImage(context, 'HEAD', 0, this.velocity.direction, this.position.x, this.position.y, size);
    }
}