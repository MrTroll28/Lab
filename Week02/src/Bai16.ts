import { multiplyByThree } from "./Bai14";

Promise.all([
    multiplyByThree(7),
    multiplyByThree(8),
    multiplyByThree(9)
]).then((results) => {
    console.log(results);
});
