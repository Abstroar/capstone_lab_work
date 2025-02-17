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

async function processVerification() {

    await Username("abhilaksh sharma");
    await Password("Heythisismypassword");
    await number("1234567890");
    await otp("2345");
    console.log("Verified successfully! Welcome");

}

processVerification();