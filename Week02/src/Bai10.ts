function testDone() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Result");
        }, 1000);
    }).finally(() => {
        console.log("Done");
    });
}

testDone().then((result) => {
    console.log(result);
});