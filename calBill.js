function calBill() {
    var amount = document.getElementById('amountForm').value;
    var person = document.getElementById('personForm').value;
    var result = amount / person;
    document.getElementById("Feedback").innerHTML = "The amount each buddy has to pay is (in USD)";
    document.getElementById("result").innerHTML = "USD " + result;
}