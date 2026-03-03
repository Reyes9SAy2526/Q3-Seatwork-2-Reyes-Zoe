function checkDiscount() {

    let budget = document.getElementById("budget").value;
    let discount = budget * 0.20;

    document.getElementById("discount").innerHTML =
        "Eligible Discount: " + discount;
}

function checkLocation() {
    
    document.getElementById("location").innerHTML =
        "Available at VillMan branches near you.";
}
