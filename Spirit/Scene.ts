export interface Spirit {
    readonly z: number;
    readonly decay: boolean;
    // Draws spirit. Returns newly added spirits.
    draw(context: CanvasRenderingContext2D): undefined | Spirit[];
}

export class Scene {
    private spirits: Spirit[] = [];

    add(spirit:Spirit) {
        this.spirits.push(spirit);
    }

    update() {
        this.spirits = this.spirits.filter((element) => !element.decay);
    }

    draw(context: CanvasRenderingContext2D) {
        var newly:Spirit[][] = [];
        this.spirits.map((element) => {
            const added = element.draw(context);
            if (added) {
                newly.push(added);
            }
        });
    }
}