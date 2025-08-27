import { simulateTask } from "./Bai05";

async function testTryCatch() {
    try {
        const result = await simulateTask(2000);
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}

testTryCatch();