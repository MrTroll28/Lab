"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bai05_1 = require("./Bai05");
Promise.race([
    (0, Bai05_1.simulateTask)(2500),
    (0, Bai05_1.simulateTask)(1000),
    (0, Bai05_1.simulateTask)(3000)
]).then((result) => {
    console.log(result);
});
