import { multiplyByThree } from "./Bai14";

async function executeTasks() {
    const result1 = await multiplyByThree(5);
    console.log(result1);

    const result2 = await multiplyByThree(6);
    console.log(result2);
}

executeTasks();
