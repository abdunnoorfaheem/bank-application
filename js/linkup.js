document.getElementById("cashout-display").addEventListener("click", function() {

    let displayCashOut = document.getElementById("cashOut-form").classList.remove("hidden");



    let addMoney = document.getElementById("addMoney-form").classList.add("hidden");

});

document.getElementById("addMoney-display").addEventListener("click", function() {


    let showAddMoney = document.getElementById("addMoney-form").classList.remove("hidden");



    let displayCashOut = document.getElementById("cashOut-form").classList.add("hidden");




});