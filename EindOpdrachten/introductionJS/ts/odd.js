function submitOdd() {
    var returnP = document.getElementById("oddReturn");
    var input = document.getElementById("oddInput");
    if (input.value == "") {
        returnP.innerHTML = "Please enter a number";
        return;
    }
    if (Number(input.value) < 0) {
        returnP.innerHTML = "Checking if a number below 0 is odd, why would you even think about doing that...";
        return;
    }
    if (Number(input.value) % 2 == 1) {
        returnP.innerHTML = "This number is odd";
    }
    else {
        returnP.innerHTML = "This number is even";
    }
}
