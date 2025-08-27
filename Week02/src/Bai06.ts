import { simulateTask } from "./Bai05";

Promise.all([
  simulateTask(1000),
  simulateTask(2000),
  simulateTask(3000)
]).then((results) => {
  console.log(results);
});