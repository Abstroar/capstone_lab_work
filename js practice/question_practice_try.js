console.log("hello")

var out = [];
var count = 0;
function game() {
    count ++;
    if (count%3==0 && count%5==0){
        out.push("buzzfiz") 
    }else{
        out.push(count)
    }
}
game()
console.log(out)

function whosPaying(names) {
        
        //Write your code here.
        var x = Math.floor(Math.random() * (names.length))
        console.log(names[x]+" is going to buy lunch today!")
    }
whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"])



function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
    if (n === 0) return [];
    if (n === 1) return [0];
        //Write your code here:
    var out = [0,1];
    for (var i=2;i<n;i++) {
        out.push(out[i-1]+out[i-2]);
        console.log(out[i-1]+out[i-2])
    }
    return out;
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
}
var x = fibonacciGenerator(40)

console.log(x)