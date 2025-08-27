"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bai05_1 = require("./Bai05");
async function testTryCatch() {
    try {
        const result = await (0, Bai05_1.simulateTask)(2000);
        console.log(result);
    }
    catch (error) {
        console.error("Error:", error);
    }
}
testTryCatch();
