function square(num: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * num);
        }, 1000);
    });
}

function double(num: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 2);
        }, 1000);
    });
}

function addFive(num: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num + 5);
        }, 1000);
    });
}

square(2)
    .then((result) => {
        console.log(result);
        return double(result);
    })
    .then((result) => {
        console.log(result);
        return addFive(result);
    })
    .then((result) => {
        console.log(result);
    });