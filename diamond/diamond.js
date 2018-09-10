shapeColor = '#0000ff'

function drawADiamond() {
    initDraw("diamond");
}

function initDraw(shapeName) {
    //get canvas object
    canvas = document.getElementById("diamondCanvas");
    //fetch and draw
    fetchShape(shapeName, function (shape) {draw(canvas, shape)});
}

function fetchShape(shapeName, _callback) {
    fetch("./svgs/" + shapeName + ".svg")
            .then(response => response.text())
            .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
            .then(data => _callback(data))
}

function draw(canvas, shape) {
    console.log("I need to work with this (", shape, ") on this (", canvas, ")")
    svg = shape.children[0];
    grid = svg.children[0];
    scale = Math.min(canvas.width / Number(svg.attributes.width.value.slice(0, -2)), canvas.height / Number(svg.attributes.height.value.slice(0, -2)))
    polygons = grid.children[0].children;
    for (n in polygons) {
        points = polygons[n].attributes.points.value.split(" ");
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = shapeColor;
        ctx.beginPath();
        for (pt in points) {
            coords = points[pt].split(",");
            if (pt == 0) {
                ctx.moveTo(coords[0]*scale, coords[1]*scale);
            } else {
                ctx.lineTo(coords[0]*scale, coords[1]*scale);
            }
        }
        ctx.closePath();
        ctx.fill();
    }
}