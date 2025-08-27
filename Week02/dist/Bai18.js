"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = fetchUser;
async function fetchUser(id) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { id, name: "User " + id };
}
fetchUser(1).then((user) => console.log(user));
