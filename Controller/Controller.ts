import {Point} from './xyTuple'
import {circle} from './DrawingHelper'

export class Controller {
    private touchStart = new Point();
    private touching = new Point();
    private isTouching = false;
    private readonly radiusLarge = 70;

    touchBegin(pnt: Point) {
        this.touchStart = Object.create(pnt);
        this.touching = this.touchStart;
        this.isTouching = true;
    }

    touchUpdate(pnt: Point) {
        this.touching = Object.create(pnt);
        const calc = Object.create(this.touching);
        calc.minus(this.touchStart);
        const ratio = calc.length;
        if (calc.length > this.radiusLarge) {
            this.touching = Object.create(this.touchStart);
            calc.length = this.radiusLarge;
            this.touching.plus(calc);
        }
    }

    touchEnd() {
        this.isTouching = false;
    }

    getControllerValue(): Point {
        if (!this.touching) {
            return new Point();
        }
        const result:Point = Object.create(this.touching);
        result.minus(this.touchStart);
        result.mul(1 / 70);
        return result;
    }

    draw(context: CanvasRenderingContext2D) {
        if (!this.isTouching) {
            return;
        }
        const radiusSmall = 25;

        circle(context, this.touchStart.x, this.touchStart.y, this.radiusLarge, '#0004');
        circle(context, this.touching.x, this.touching.y, radiusSmall, '#0004');
    }
}
