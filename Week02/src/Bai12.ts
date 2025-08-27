import { simulateTask } from "./Bai05";

async function executeTask() {
    const result = await simulateTask(2000);
    console.log(result);
}

executeTask();
