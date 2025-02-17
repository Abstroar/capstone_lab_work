
function let_tester() {
    console.log("hii");
    var ok = 11;
    if (ok == 10) {
        console.log(ok);
        let trst = 11;
    } else {
        let trst = 1;
        console.log("let value before this",trst)
        trst = 30;
        if (trst == 30){
            console.log("let is working",trst);
        }
    }
    // console.log(trst);
    console.log("value of var",ok);

}
// console.log(ok)

let_tester()


