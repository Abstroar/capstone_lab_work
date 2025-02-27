const users_db = {
    1: "Abhi",
    2: "laksh",
    3: "my name ",
    4: "test",
    4: "another one"
};

function getUserDataCallback(id) {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            if (id in users_db) {
                resolve({ id: id, name: users_db[id] });
            } else {
                reject("User does not exist in the database");
            }
        }, 1000);
    });
}
getUserDataCallback(10)
    .then (found => console.log("User found in data",found))
    .catch(not_found => console.log("error ",not_found));




