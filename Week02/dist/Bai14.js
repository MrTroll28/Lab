"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplyByThree = multiplyByThree;
async function multiplyByThree(num) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return num * 3;
}
multiplyByThree(4).then((result) => {
    console.log(result);
});
