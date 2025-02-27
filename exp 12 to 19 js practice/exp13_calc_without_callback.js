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
    if (what == 1) {console.log("Addition: ", add(a, b));
    }else if (what==2) {console.log("Subtraction: ", subtract(a, b));
    }else if (what == 3) {console.log("Multiplication: ", multiply(a, b));
    }else if (what==4) {console.log("Division: ", divide(a, b));
}
}

choose(2,2,4)