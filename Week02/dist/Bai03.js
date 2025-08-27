"use strict";
function rejectAfterDelay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong");
        }, 1000);
    });
}
rejectAfterDelay().catch((error) => {
    console.error(error);
});
