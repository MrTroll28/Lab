"use strict";
function getRandomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber >= 0.5) { // để test điều kiện thôi
                resolve(randomNumber);
            }
            else {
                reject("Failed to generate a random number");
            }
        }, 1000);
    });
}
getRandomNumber()
    .then((num) => {
    console.log(num);
})
    .catch((error) => {
    console.error(error);
});
