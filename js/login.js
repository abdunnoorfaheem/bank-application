document.getElementById("btn-login").addEventListener("click", function(event) {
    event.preventDefault();


    let mobileNumber = document.getElementById("mobile-number");
    let mobile = mobileNumber.value;
    // console.log(mobile);

    let pinNumber = document.getElementById("pin-Number");
    let pin = pinNumber.value;
    // console.log(pin);

    if (mobile === "0153" && pin === "1234") {

        window.location.href = "/home.html";

    } else {

        alert("Please enter  valid mobile or pin ");

    }


})