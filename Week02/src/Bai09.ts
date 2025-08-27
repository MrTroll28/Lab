function filterEvenNumbers(arr: number[]): Promise<number[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filtered = arr.filter((num) => num % 2 === 0);
            resolve(filtered);
        }, 1000);
    });
}

filterEvenNumbers([1, 2, 3, 4, 5, 6]).then((result) => {
    console.log(result);
});