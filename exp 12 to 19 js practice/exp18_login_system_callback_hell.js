console.log("2");


function Username(Userid,callback) {
    setTimeout (() => {console.log("Confirming username",Userid);
        if (callback){
            callback();
        }
    },2000);
}
function Password(Paas, callback){
    setTimeout(()=>{
        console.log("Confirming password",Paas);
        if (callback){
            callback();
        }
    },2000);

}

function number(phonenumber, callback){
    setTimeout(()=>{
        console.log("verifying number by sending otp on", phonenumber);
        if (callback){
            callback();
        }
    },2000);
}

function otp(otppp, callback){
    setTimeout(() => {
        console.log("Verifying the opt", otppp);
        if (!callback){
            setTimeout(() => {console.log("Verfied successfully Welcome");},500);
            
        }
    },2000);
}

Username("abhilaksh sharma",() => {
    Password("Heythisismypassword", () => {
        number("1234567890", () => {
            otp("2345")
        });
    });
});
