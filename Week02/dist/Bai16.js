"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bai14_1 = require("./Bai14");
Promise.all([
    (0, Bai14_1.multiplyByThree)(7),
    (0, Bai14_1.multiplyByThree)(8),
    (0, Bai14_1.multiplyByThree)(9)
]).then((results) => {
    console.log(results);
});
