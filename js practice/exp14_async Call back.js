function data_printer(data) {
    console.log("Data fetched:", data);
}

function Async(call_back) {
    console.log("Start");
    const data = ["ABHILAKSH", "THIS", "SHOWS", "HOW", "A", "ASYNC", "FUNCTION", "WORKS"];


    data.forEach((element) => {
        setTimeout(() => {
            call_back(element);
        }, 2000);
    });

    console.log("END");
}
Async(data_printer);