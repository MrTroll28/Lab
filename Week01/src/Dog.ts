import { Animal } from "./Animal";

class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Gâu gâu");
    }
}

const dog1 = new Dog("Mèo");
dog1.makeSound();
