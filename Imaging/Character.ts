import { Point } from './xyTuple';
import { circle, drawImage } from './DrawingHelper';
import { Images } from './Images';

export class Character {
    private frame = 0;
    private headSpin = 0;
    position = new Point();
    velocity = new Point();

    draw(context: CanvasRenderingContext2D) {
        // Update status
        this.velocity.mul(0.97);
        this.position.plus(this.velocity);

        // Boundry check
        if (this.position.x < 0) {
            this.velocity.x = 0;
            this.position.x = 0;
        }
        if (this.position.y < 0) {
            this.velocity.y = 0;
            this.position.y = 0;
        }

        // Draw spirit
        const size = 40;
        this.frame += this.velocity.length;
        const WALKING_CONSTANT = 30;
        const WALKING_STEPS = [0, 1, 0, 2];
        while (this.frame > WALKING_CONSTANT * 4) {
            this.frame -= WALKING_CONSTANT * 4;
        }

        const headOffset = (this.velocity.length * 0.2 + 1) * (Math.sin(this.headSpin += Math.PI / 60) + 1);

        drawImage(context, 'BODY', WALKING_STEPS[Math.floor(this.frame / WALKING_CONSTANT)], this.velocity.direction, this.position.x, this.position.y, size);
        drawImage(context, 'HEAD', 0, this.velocity.direction, this.position.x, this.position.y + headOffset, size);
    }
}