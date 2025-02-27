
function sum(...numbers) {
    let total = 0;
    for (let variable of numbers){
    total += Number(variable)
    }
    console.log(`total out put ${total}`)
}

sum(1, 2, 3, 4, 5,6);
