function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function choose(what,a,b){
    console.log("My output after " + what.name+ " " + what(a,b))
}

choose(multiply,2,4)