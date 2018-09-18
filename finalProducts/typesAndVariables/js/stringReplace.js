let stringReturn = document.getElementById("stringReplaceReturn"),
    inputString = "Programming is not so cool";
// replace not (and the trailing space) with nothing
stringReturn.innerHTML = inputString.replace("not", "").replace("  ", " ")