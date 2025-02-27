let secret = {
    password: "12345",
    name:"abhilaksh"
};

let proxySecret = new Proxy(secret, {
    get(target, property) {
        return property === "password" ? "Access Denied" : target[property];
    }
});

console.log(proxySecret.password);
console.log(proxySecret.name);

// console.log(secret.password);


