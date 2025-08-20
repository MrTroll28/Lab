import { Flyable } from "./Flyable";
import { Swimable } from "./Swimable";

class Bird implements Flyable {
    fly(): void {
        console.log("Flying...");
    }
}

class Fish implements Swimable {
    swim(): void {
        console.log("Swimming...");
    }
}

const bird1 = new Bird();
bird1.fly();

const fish1 = new Fish();
fish1.swim();