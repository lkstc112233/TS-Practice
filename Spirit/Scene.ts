export interface Spirit {
    // Order used to determine what order to be drawn.
    // With greater z, the later the spirit will be drawn.
    // Therefore the less it will be overlaped by another spirit.
    readonly z: number;
    readonly decay: boolean;
    // Returns newly added spirits.
    generate(): Spirit[];
    draw(context: CanvasRenderingContext2D): void;
}

export class Scene {
    private spirits: Spirit[] = [];

    add(spirit:Spirit) {
        this.spirits.push(spirit);
    }

    update() {
        this.spirits = ([] as Spirit[]).concat(...(this.spirits.map((element) => [element].concat(element.generate()))));
        this.spirits = this.spirits.filter((element) => !element.decay);
    }

    draw(context: CanvasRenderingContext2D) {
        this.spirits = this.spirits.sort((sp1, sp2) => sp1.z - sp2.z);
        this.spirits.map((element)=> element.draw(context));
    }
}