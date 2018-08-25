import { Point, Direction } from './xyTuple';
import { drawImage } from './DrawingHelper';
import { Sprite } from './Scene';

class CharacterAfterImage implements Sprite {
    private lifeCountdown = 10;
    constructor(private readonly position: Point, private readonly frame: number, private readonly headOffset: number, private readonly direction:Direction) {}

    get z(): number {
        return this.position.y;
    }

    get decay(): boolean {
        return this.lifeCountdown <= 0;
    }

    draw(context: CanvasRenderingContext2D) {
        // Draw spirit
        const size = 40 - this.lifeCountdown / 2;
        const WALKING_CONSTANT = 30;
        const WALKING_STEPS = [0, 1, 0, 2];

        context.save();
        context.globalAlpha = this.lifeCountdown / 10;
        drawImage(context, 'BODY', WALKING_STEPS[Math.floor(this.frame / WALKING_CONSTANT)], this.direction, this.position.x, this.position.y, size);
        drawImage(context, 'HEAD', 0, this.direction, this.position.x, this.position.y + this.headOffset, size);
        context.restore();

        // Count down
        this.lifeCountdown -= 1;
    }
}

export class Character implements Sprite {
    private frame = 0;
    private headSpin = 0;
    private headOffset = 0;
    position = new Point();
    velocity = new Point();

    get z(): number {
        return this.position.y; 
    }

    get decay(): boolean {
        return false;
    }

    generate(): Sprite[] {
        if (this.velocity.length > 4) {
            return [new CharacterAfterImage(Object.create(this.position), this.frame, this.headOffset, this.velocity.direction)];
        }
        return [];
    }

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

        // Update headOffset
        this.headOffset = (this.velocity.length * 0.2 + 1) * (Math.sin(this.headSpin += Math.PI / 60) + 1);

        drawImage(context, 'BODY', WALKING_STEPS[Math.floor(this.frame / WALKING_CONSTANT)], this.velocity.direction, this.position.x, this.position.y, size);
        drawImage(context, 'HEAD', 0, this.velocity.direction, this.position.x, this.position.y + this.headOffset, size);
    }
}