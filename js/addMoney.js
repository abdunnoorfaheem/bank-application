document.getElementById("add-money").addEventListener("click", function(event) {


    event.preventDefault();


    let addAmount = document.getElementById("amount").value;
    let pinNumber = document.getElementById("pin").value;

    let currentBalance = document.getElementById("balance").innerText;
    console.log(currentBalance);

    if (pinNumber === "1234") {

        let updateBalance = (parseFloat(currentBalance) + parseFloat(addAmount));
        console.log(updateBalance);

        document.getElementById("balance").innerText = updateBalance;



    } else {

        alert("Your Pin is Wrong");
    }





});