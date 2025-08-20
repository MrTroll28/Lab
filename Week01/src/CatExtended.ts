import { BaseAnimal } from "./BaseAnimal";

export class Cat extends BaseAnimal {

    constructor(name: string) {
        super(name);
    }

    meow(): void {
        console.log(`Meow`);
    }
}

const cat1 = new Cat("Chó");
cat1.meow();