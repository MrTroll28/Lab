export async function multiplyByThree(num: number) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return num * 3;
}

multiplyByThree(4).then((result) => {
    console.log(result);
});