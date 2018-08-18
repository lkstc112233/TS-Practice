export class Character {
    private frame = 0;
    private m_x = 0;
    private m_y = 0;
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

    draw(context: CanvasRenderingContext2D) {
        const radius = Math.sin(this.frame) * 20 + 50;
        this.frame += Math.PI / 60;
        context.ellipse(this.x, this.y, radius, radius, 0, 0, Math.PI);
    }
}