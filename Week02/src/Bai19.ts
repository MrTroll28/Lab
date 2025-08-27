import { fetchUser } from "./Bai18";

async function fetchUsers(ids: number[]) {
    const users = await Promise.all(ids.map(id => fetchUser(id)));
    return users;
}

fetchUsers([1, 2, 3]).then(users => console.log(users));