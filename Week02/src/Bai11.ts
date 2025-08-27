async function helloAsync2() {
    const result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, Async!");
        }, 1000);
    });
    console.log(result);
}

helloAsync2();
