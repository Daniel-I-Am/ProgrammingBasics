let points = 0,
    pointObj,
    buttonObj,
    size = 1;

function click(obj) {
    points += 1;
    if (points % 10 == 0) {
        size *= .9;
    }
    buttonObj.style = "transform: scale(" + size + ");";
    pointObj.innerHTML = points;
}

function load() {
    buttonObj = document.getElementById("button");
    pointObj = document.getElementById("points");
    buttonObj.addEventListener('click', click);
}