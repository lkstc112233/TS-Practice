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
}