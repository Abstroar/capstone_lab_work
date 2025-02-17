const availableItems = ["Laptop", "Phone", "Tablet"]; 

function checkInventory(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Checking inventory for ",item);
            let inStock = availableItems.includes(item);
            if (inStock) {
                resolve(item);
            } else {
                reject("Sorry, Its is out of stock.");
            }
        }, 1000);
    });
}

function processPayment(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Processing payment for ",item);
            resolve("Payment successful for",item);
        }, 1000);
    });
}

function processOrder(item) {
    console.log("Order processing started");

    checkInventory(item)
        .then(processPayment)
        .then(message => console.log(message))
        .catch(err => console.log("Error:", err));
}

processOrder("Laptop");

