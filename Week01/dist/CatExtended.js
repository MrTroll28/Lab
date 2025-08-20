"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
const BaseAnimal_1 = require("./BaseAnimal");
class Cat extends BaseAnimal_1.BaseAnimal {
    constructor(name) {
        super(name);
    }
    meow() {
        console.log(`Meow`);
    }
}
exports.Cat = Cat;
const cat1 = new Cat("Chó");
cat1.meow();
