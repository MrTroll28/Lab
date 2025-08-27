"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bai18_1 = require("./Bai18");
async function fetchUsers(ids) {
    const users = await Promise.all(ids.map(id => (0, Bai18_1.fetchUser)(id)));
    return users;
}
fetchUsers([1, 2, 3]).then(users => console.log(users));
