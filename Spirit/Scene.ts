export interface Spirit {
    readonly z: number;
    readonly decay: boolean;
    // Draws spirit. Returns newly added spirits.
    draw(context: CanvasRenderingContext2D): Spirit[];
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
        this.spirits = this.spirits.sort((sp1, sp2) => sp1.z - sp2.z);
        this.spirits = ([] as Spirit[]).concat(...(this.spirits.map((element) => {
            const added = element.draw(context);
            const result = [element];
            if (added) {
                result.concat(added);
            }
            return result;
        })));
    }
}