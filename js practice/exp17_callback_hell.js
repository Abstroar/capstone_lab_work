const user = {
    "Abhi" : {"password": "passwordtester"}
};  
function login(username,callback) {
    setTimeout(() =>{
        console.log("Username is entered",username);
        if (user[username]) {
        callback(null,username);
        } else {
            callback("username not foubnd",null);
        }
    },1000);
}

function password(username, pass, callback) {
    setTimeout(()=> {
        console.log("enter password");
        if (user[username] && user[username].password === pass) {
        callback(null,pass);
        } else {
            callback("password wrong",null);
        }
    }, 1000);
}

function start_game(character_name,callback) {
    setTimeout(()=>{
        console.log("Enter your character name",character_name);
        callback(null,{character_name});
    },1000);
}

function select(build, callback) {
    setTimeout(()=>{
        console.log("Select your character atrributes",build);
        callback();
    });
}


login("Abhi", (err,username) => {
    if (err) {
        console.log("try again ",err);
    } else {
    password(username,"passwordtester",(error, password_that_trid) => {
        if (error){
            console.log("Wrong passsword",password_that_trid);
        } else { start_game("Abstor",() => {
                    select("Strength build",() => {
                        console.log("all the functions over");
            });
        });
    }
    });
    }
});


