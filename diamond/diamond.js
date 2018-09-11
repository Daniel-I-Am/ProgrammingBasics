defaultCol = '#ffffff';
selectedShape = "diamond";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function initDraw(shapeName) {    
    // get canvas object
    canvas = document.getElementById("diamondCanvas");

    // fetch and draw
    fetchShape(shapeName, function (shape) {draw(canvas, shape)});
}

async function fetchShape(shapeName, _callback) {
    // fetch file and call `_callback` with the data
    fetch("./svgs/" + shapeName + ".svg")
            .then(response => response.text())
            .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
            .then(data => _callback(data))
}

async function draw(canvas, shape) {
    context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    // draw according to params
    // get some clearer var names
    svg = shape.children[0];
    // get scale to draw at (based on canvas size and svg size)
    scale = Math.min(canvas.width / Number(svg.attributes.width.value.slice(0, -2)), canvas.height / Number(svg.attributes.height.value.slice(0, -2)))
    // get the polygons inside the svg
    polygons = svg.children;
    for (n in polygons) {
        // split the coords of the polygon
        points = polygons[n].attributes.points.value.split(" ");
        // get the canvas' context
        var ctx = canvas.getContext('2d');
        // set fill color
        style = {}
        polyStyle = polygons[n].attributes.style.value.split(";");
        for (i in polyStyle) {
            styleAttr = polyStyle[i].split(":")
            if (styleAttr[1] == "none") {styleAttr[1] = defaultCol}
            style[styleAttr[0]] = styleAttr[1]
        }
        console.log(style)
        ctx.fillStyle = style["fill"];
        ctx.lineWidth = Number(style["stroke-width"])*scale;
        ctx.strokeStyle = style["stroke"];
        // init draw
        ctx.beginPath();
        // go through all points
        for (pt in points) {
            // split up coords into x and y
            coords = points[pt].split(",");
            if (pt == 0) {
                // if it's the first point, move to without drawing line
                ctx.moveTo(coords[0]*scale, coords[1]*scale);
            } else {
                // else draw line from previous point to next
                ctx.lineTo(coords[0]*scale, coords[1]*scale);
            }
        }
        // finish up paths
        ctx.closePath();
        // delay execution
        await sleep(150);
        // stroke
        ctx.stroke();
        // fill
        ctx.fill();
        // clear up memory
        ctx = null;
    }
}