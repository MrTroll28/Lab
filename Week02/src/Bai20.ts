// Add a timeout: if the API call takes more than 2 seconds, throw an error.
async function fetchUser(id: number){
    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error("Timeout")), 2000);
            setTimeout(() => resolve({ id, name: "User " + id }), 4000);
        });
        return { id, name: "User " + id };
    } catch (error) {
        throw new Error("Request timed out");
    }
}

fetchUser(1).then((user) => console.log(user)).catch((error) => console.error(error.message));