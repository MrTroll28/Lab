import { simulateTask } from "./Bai05";
Promise.race([
  simulateTask(2500),
  simulateTask(1000),
  simulateTask(3000)
]).then((result) => {
  console.log(result);
});