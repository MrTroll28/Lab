"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bai05_1 = require("./Bai05");
Promise.all([
    (0, Bai05_1.simulateTask)(1000),
    (0, Bai05_1.simulateTask)(2000),
    (0, Bai05_1.simulateTask)(3000)
]).then((results) => {
    console.log(results);
});
