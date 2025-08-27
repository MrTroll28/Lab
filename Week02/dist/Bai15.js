"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bai14_1 = require("./Bai14");
async function executeTasks() {
    const result1 = await (0, Bai14_1.multiplyByThree)(5);
    console.log(result1);
    const result2 = await (0, Bai14_1.multiplyByThree)(6);
    console.log(result2);
}
executeTasks();
