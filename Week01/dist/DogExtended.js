"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const BaseAnimal_1 = require("./BaseAnimal");
class Dog extends BaseAnimal_1.BaseAnimal {
    constructor(name) {
        super(name);
    }
    bark() {
        console.log(`Gâu gâu`);
    }
}
exports.Dog = Dog;
const dog1 = new Dog("Mèo");
dog1.bark();
