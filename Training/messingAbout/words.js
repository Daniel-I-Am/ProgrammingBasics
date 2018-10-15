const fs = require("fs");
const words = fs.readFileSync("words.txt").toString();
const wordArray = words.split("\n");

var badLetters = /[kmqvwxzios\-]/i;
var longestWords = [];

for (var testWord of wordArray) {
    var cmpWord = longestWords[0] || "";
    if (testWord.length < cmpWord.length)
        continue;

    if (testWord.match(badLetters))
        continue;

    if (testWord.length > cmpWord.length) {
        longestWords = [testWord];
    } else {
        longestWords[longestWords.length] = testWord;
    }
}

function num(line1, line2, line3, line4, line5, line6, line7, lines = ["", "", "", "", ""]) {
    lines[0] += ` ${function() {if (line1){return "--"}return"  "}()}     `;
    lines[1] += `${function() {if (line2){return "|"}return" "}()}  ${function() {if (line3){return "|"}return" "}()}    `;
    lines[2] += ` ${function() {if (line4){return "--"}return"  "}()}     `;
    lines[3] += `${function() {if (line5){return "|"}return" "}()}  ${function() {if (line6){return "|"}return" "}()}    `;
    lines[4] += ` ${function() {if (line7){return "--"}return"  "}()}     `;
    return lines;
}

let alphabet = {
    a: [true, false, true, true, true, true, true],
    b: [false, true, false, true, true, true, true],
    c: [false, false, false, true, true, false, true],
    d: [false, false, true, true, true, true, true],
    e: [true, true, false, true, true, false, true],
    f: [true, true, false, true, true, false, false],
    g: [true, true, false, false, true, true, true],
    h: [false, true, false, true, true, true, false],
    j: [true, false, true, false, false, true, true],
    l: [false, false, true, false, false, true, false],
    n: [true, true, true, false, true, true, false],
    p: [true, true, true, true, true, false, false],
    r: [false, false, false, true, true, false, false],
    t: [false, true, false, true, true, false, true],
    u: [false, false, false, false, true, true, true],
    y: [false, true, true, true, false, true, true],
    0: [true, true, true, false, true, true, true],
    1: [false, true, false, false, true, false, false],
    2: [true, false, true, true, true, false, true],
    3: [true, false, true, true, false, true, true],
    4: [false, true, true, true, false, true, false],
    5: [true, true, false, true, true, false, true],
    6: [true, true, false, true, true, true, true],
    7: [true, false, true, false, false, true, false],
    8: [true, true, true, true, true, true, true],
    9: [true, true, true, true, false, true, true]
}

for (var word of longestWords) {
    let lines = ["", "", "", "", ""];
    for (char of word.split("")) {
        lines = num(...alphabet[char], lines);
    }
    console.log(word.split("").join("       "))
    for (let i = 0; i < 5; i++) {
        console.log(lines[i]);
    }
}