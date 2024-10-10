document.getElementById("btn-login").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("ami click");

    let mobileNumber = document.getElementById("mobile-number");
    let mobile = mobileNumber.value;
    console.log(mobile);


})