const user = {
    "Abhi": { "password": "passwordtester" }
};

function login(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Username is entered", username);
            if (user[username]) {
                resolve(username);
            } else {
                reject("Username not found");
            }
        }, 1000);
    });
}

function password(username, pass) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Enter password");
            if (user[username] && user[username].password === pass) {
                resolve(pass);
            } else {
                reject("Password wrong");
            }
        }, 1000);
    });
}

function start_game(character_name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Enter your character name", character_name);
            resolve(character_name);
        }, 1000);
    });
}

function select(build) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Select your character attributes", build);
            resolve();
        });
    });
}

login("Abhi")
    .then(username => password(username, "passwordtester"))
    .then(() => start_game("Abstor"))
    .then(() => select("Strength build"))
    .then(() => console.log("All the functions over"))
    .catch(error => console.log("Error:", error));