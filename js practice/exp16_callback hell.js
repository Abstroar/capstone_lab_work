    function checkInventory(item, callback) {
    setTimeout(() => {
        console.log(`Checking inventory for ${item}...`);
        callback(item);
    }, 1000);
}

function processPayment(item, callback) {
    setTimeout(() => {
        console.log(`Processing payment for ${item}...`);
        callback("Payment processed");
    }, 1000);
}

function generateInvoice(item, callback) {
    setTimeout(() => {
        console.log(`Generating invoice for ${item}...`);
        callback(item);
    }, 1000);
}

function shipItem(item, callback) {
    setTimeout(() => {
        console.log(`Shipping ${item}...`);
        callback();
    }, 1000);
}

function processOrder(item) {
    console.log('Order processing started');

    checkInventory(item, function (item) {
        processPayment(item, function (item) {
            generateInvoice(item, function (item) {
                shipItem(item, function () {
                    console.log(`${item} has been successfully ordered and shipped!`);
                });
            });
        });
    });
}

processOrder('Laptop');