import { multiplyByThree } from "./Bai14";

async function executeTasks() {
    const tasks = [multiplyByThree(10), multiplyByThree(11), multiplyByThree(12)];

    for await (const result of tasks) {
        console.log(result);
    }
}

executeTasks();
