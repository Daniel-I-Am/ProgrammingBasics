let canvas, ctx;
let width, height;
let interval;

let tileSize = 8,
    tps = 1000;

let loc,
    direction = [0, 1];

let colors = ["255,255,255", "255,0,0", "0,255,0", "0,0,255", "0,0,0"];
let directions = ["r", "l", "r", "r", "l", "r"]

function init() {
    canvas = document.getElementById('mainCanvas');
    width = Number(canvas.attributes.width.value);
    height = Number(canvas.attributes.height.value);
    loc = [Math.floor(width/tileSize/2), Math.floor(height/tileSize/2)];
    ctx = canvas.getContext("2d");
    drawGrid();
    interval = setInterval(moveAnt, 1000/tps)
}

/**
 * Draws a tile at given location with give color
 * @param {Number} x X location of the tile
 * @param {Number} y Y location of the tile
 * @param {Number[]} color Array of decimal representation of RGB
 * @returns nothing
 */
function drawTile(x, y, color) {
    if (x*tileSize+1 < 1 || x*tileSize+1 > width || y*tileSize+1 < 1 || y*tileSize+1 > height) {
        clearInterval(interval);
        return
    }
    ctx.fillStyle = `rgb(${color.join(",")})`;
    ctx.fillRect(x*tileSize+1, y*tileSize+1, tileSize-1, tileSize-1);
}

/**
 * Draws a grid based on width, height and tileSize
 */
function drawGrid() {
    ctx.fillStyle = `rgb(0,0,0)`;
    ctx.fillRect(0, 0, width, height);
    for (let x = 0; x < Math.floor(width/tileSize); x++)
        for (let y = 0; y < Math.floor(height/tileSize); y++)
            drawTile(x, y, [255, 255, 255]);
}

/**
 * Gets the color of a tile at a certain location
 * @param {Number} x X location of the tile
 * @param {Number} y Y location of the tile
 */
function getColor(x, y) {
    return [...ctx.getImageData(x*tileSize+1, y*tileSize+1, 1, 1).data].slice(0,3);
}

function moveAnt() {
    loc = loc.map((e, i) => e + direction[i]);
    changeDirection();
}

function changeDirection() {
    let color = getColor(...loc);
    let index = (colors.indexOf(color.join(",")));
    direction = (() => {switch(directions[index]) {
        case "l":
            return [-direction[1], direction[0]];
        case "r":
           return [direction[1], -direction[0]];
    }})(); // lol, getting memories of lisp
    index = (index+1)%colors.length;
    drawTile(...loc, colors[index].split(",").map(e => Number(e)));
}

window.addEventListener('load', init);