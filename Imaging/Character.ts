import { Point } from './xyTuple';
import { circle } from './DrawingHelper';
import { ImagesLoaded } from './Images';

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
        
        context.drawImage(ImagesLoaded.BODY, 0, 0, 16, 16, this.position.x, this.position.y, size, size);
        context.drawImage(ImagesLoaded.HEAD, 0, 0, 16, 16, this.position.x, this.position.y, size, size);
    }
}