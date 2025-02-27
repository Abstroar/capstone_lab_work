const users_db = {
    1: "Abhi",
    2: "laksh",
    3: "my name ",
    4: "test",
    4: "another one"
};

function getUserDataCallback(id, callback) {
    setTimeout(() => {
        if (id in users_db) {
            callback(null, { id: id, name: users_db[id] });
        } else {
            callback("User does not exist in the database", null);
        }
    }, 1000);
}

getUserDataCallback(2, (error, user) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("User information found is :", user);
    }
});
