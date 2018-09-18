function submitOdd() {
    const returnP = document.getElementById("oddReturn")
    const input = document.getElementById("oddInput")
    // if it's not a number
    if (input.value == "") {
        returnP.innerHTML = "Please enter a number"
        return
    }
    if (input.value < 0) {
        // below 0
        returnP.innerHTML = "Checking if a number below 0 is odd, why would you even think about doing that..."
        return
    }
    if (input.value % 2 == 1) {
        // odd
        returnP.innerHTML = "This number is odd"
    } else {
        // even
        returnP.innerHTML = "This number is even"
    }
}