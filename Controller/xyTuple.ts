export class Point {
    private m_x: number;
    private m_y: number;
    constructor(x: number = 0, y: number = 0) {
        this.m_x = x;
        this.m_y = y;
    }

    get x() : number {
        return this.m_x;
    }

    set x(val: number) {
        this.m_x = val;
    }

    get y() : number {
        return this.m_y;
    }

    set y(val: number) {
        this.m_y = val;
    }

    plus(another:Point) {
        this.x += another.x;
        this.y += another.y;
    }

    minus(another: Point) {
        this.x -= another.x;
        this.y -= another.y;
    }

    mul(ratio: number) {
        this.x *= ratio;
        this.y *= ratio;
    }

    zero() {
        this.x = this.y = 0;
    }

    get length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    set length(length: number) {
        this.normalize();
        this.mul(length);
    }

    normalize() {
        const ratio = Math.sqrt(this.x * this.x + this.y * this.y);
        if (ratio == 0) {
            return;
        }
        this.x /= ratio;
        this.y /= ratio;
    }
}