"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dog {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Gâu gâu");
    }
}
const dog1 = new Dog("Mèo");
dog1.makeSound();
