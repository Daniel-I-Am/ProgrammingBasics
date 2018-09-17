var stringReturn : HTMLElement = document.getElementById("stringReplaceReturn")
var inputString : string = "Programming is not so cool";

stringReturn.innerHTML = inputString.replace("not", "").replace("  ", " ")