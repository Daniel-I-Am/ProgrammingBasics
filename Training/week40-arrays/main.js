// define laps
const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];
// get a random number between 0 and 1, multiply by length of array (so we get a number between 0 and len)
// floor the result to get an int 0 to len-1, log element
console.log(lapRounds[Math.floor(Math.random()*lapRounds.length)]);

// define records in 2-dim array
const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
];

// get parent length
let lp = allMyRecords.length;
// loop through parent elements
for (let i = 0; i < lp; i++) {
    // get element length
    let le = allMyRecords[i].length;
    // loop through elements children
    for (let j = 0; j < le; j++) {
        // log elements children
        console.log(allMyRecords[i][j]);
    }
}

// snippet from excersize
const filteredLapRoundsWithForLoop = function () {
    let newArray = [];
    for (let i = 0; i < lapRounds.length; i++) {
 
        if (lapRounds[i] < 4) {
            newArray.push(lapRounds[i]);
        }
    }
    return newArray;
}

// log result from convoluted function, with a horrible name, may I add
console.log(filteredLapRoundsWithForLoop());
// now do the same in a one liner, because it's possible :)
console.log(lapRounds.filter(time => time < 4));