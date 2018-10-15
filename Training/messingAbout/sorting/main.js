let canvas,
    ctx;

let data = [...new Array(25)].map((_, i) => i);

function init() {
    canvas = document.getElementsByTagName("canvas")[0];
    ctx = canvas.getContext('2d');
    document.getElementById("randomData").addEventListener('click', function() {
        let amountData = Number(document.getElementById('amountData').value) || 25;
        randomData(amountData);
    });
}

function randomData(n) {
    let orderedData = [...new Array(n)].map((_, i) => i);
    data = []
    for (let i = n-1; i >= 0; i--)
        data[n-i-1] = orderedData.splice(Math.floor(Math.random()*i), 1)[0];
}

function drawData() {
    //TODO: let width = canvas.width/
}

window.addEventListener('load', init)