document.getElementById("cashout-amount").addEventListener("click", function(event) {

    event.preventDefault();
    let cashoutAmount = document.getElementById("input-cashout-amount").value;
    let pinNumber = document.getElementById("pinnumber").value;


    if (pinNumber === "1234") {
        let currentBalance = document.getElementById("balance").innerText;

        let updateBalance = (parseFloat(currentBalance) - parseFloat(cashoutAmount));


        document.getElementById("balance").innerText = updateBalance;
    } else {

        alert("Something is wrong!");
    }





});