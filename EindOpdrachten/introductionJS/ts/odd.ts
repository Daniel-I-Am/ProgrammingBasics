function submitOdd() {
    let returnP : HTMLElement = document.getElementById("oddReturn")
    let input : HTMLElement = document.getElementById("oddInput")
    if ((<HTMLInputElement>input).value == "") {
        returnP.innerHTML = "Please enter a number"
        return
    }
    if (Number((<HTMLInputElement>input).value) % 2 == 1) {
        returnP.innerHTML = "This number is odd"
    } else {
        returnP.innerHTML = "This number is even"
    }
}