let canvas,
    ctx;

let data = [...new Array(25)].map((_, i) => i+1);

function init() {
    canvas = document.getElementsByTagName("canvas")[0];
    ctx = canvas.getContext('2d');
    document.getElementById("randomData").addEventListener('click', function() {
        let amountData = Number(document.getElementById('amountData').value) || 25;
        randomData(amountData);
    });
    document.getElementById('sortButton').addEventListener('click',function() {
        let sortingType = document.getElementById('sortType').value;
        drawData();
        startSort(sortingType);
    });
}

function randomData(n) {
    let orderedData = [...new Array(n)].map((_, i) => i+1);
    data = []
    for (let i = n-1; i >= 0; i--)
        data[n-i-1] = orderedData.splice(Math.floor(Math.random()*(i+1)), 1)[0];
    drawData()
}

function drawData() {
    let width = canvas.width / data.length;
    let height = canvas.height / Math.max(...data);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    data.forEach((e, i) => {
        ctx.fillStyle = 'hsl('+ 360*(e/data.length) +',100%,50%)';
        ctx.fillRect(width*i, canvas.height - height*e, width, height*e);
    })
}

async function startSort(type) {
    let sortFunc = function() {
        switch (type) {
            case "BubbleSort":
                return bubble;
            default:
                console.error("TypeError", "No sorting algorithm selected");
        }
    }();
    let maxTries = data.length ** 2;
    let shouldStop = false;
    while ([...data].sort((a, b) => a-b) != data && maxTries > 0 && !shouldStop) {
        shouldStop = await sortFunc();
        maxTries--;
    }
}

async function bubble() {
    let isSorted = true;
    await new Promise((resolve, reject) => {
        window.setTimeout(() => {
            for (let i = 0; i < data.length-1; i++) {
                let comparing = data.slice(i, i+2);
                let sorted = [Math.min(...comparing), Math.max(...comparing)];
                if (comparing != sorted && isSorted)
                    isSorted = false;
                data.splice(i, 2, ...sorted);
                resolve("asd");
            }
        });
    });
    drawData();
    return isSorted;
}

window.addEventListener('load', init)

/*
 * randomData(25); str = ["", ""]; data.forEach((e, i) => {
 *     str[0] += i + " ".repeat(3-i.toString().length);
 *     str[1] += e + " ".repeat(3-e.toString().length)
 * });
 * console.log(str.join("\n"))
 */