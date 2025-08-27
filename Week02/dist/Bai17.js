"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bai14_1 = require("./Bai14");
async function executeTasks() {
    const tasks = [(0, Bai14_1.multiplyByThree)(10), (0, Bai14_1.multiplyByThree)(11), (0, Bai14_1.multiplyByThree)(12)];
    for await (const result of tasks) {
        console.log(result);
    }
}
executeTasks();
