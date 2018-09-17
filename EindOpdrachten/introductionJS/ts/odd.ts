function submitOdd() {
    let returnP : HTMLElement = document.getElementById("oddReturn")
    let input : HTMLElement = document.getElementById("oddInput")
    if ((<HTMLInputElement>input).value == "") {
        returnP.innerHTML = "Please enter a number"
        return
    }
    if (Number((<HTMLInputElement>input).value) < 0) {
        returnP.innerHTML = "Checking if a number below 0 is odd, why would you even think about doing that..."
        return
    }
    if (Number((<HTMLInputElement>input).value) % 2 == 1) {
        returnP.innerHTML = "This number is odd"
    } else {
        returnP.innerHTML = "This number is even"
    }
}