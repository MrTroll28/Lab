import { BaseAnimal } from "./BaseAnimal";

export class Dog extends BaseAnimal {
    constructor(name: string) {
        super(name);
    }

    bark(): void {
        console.log(`Gâu gâu`);
    }
}

const dog1 = new Dog("Mèo");
dog1.bark();
