function Username(Userid) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Confirming username", Userid);
            resolve(); 
        }, 2000);
    });
}

function Password(Paas) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Confirming password", Paas);
            resolve(); 
        }, 2000);
    });
}

function number(phonenumber) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Verifying number by sending OTP on", phonenumber);
            resolve();
        }, 2000);
    });
}

function otp(otppp) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Verifying the OTP", otppp);
            resolve();
        }, 2000);
    });
}

Username("abhilaksh sharma")
    .then(() => Password("Heythisismypassword"))
    .then(() => number("1234567890"))
    .then(() => otp("2345"))
    .then(() => {
        console.log("Verified successfully! Welcome");
    });