const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];
console.log(lapRounds[Math.floor(Math.random()*lapRounds.length)]);

const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
];

let lp = allMyRecords.length;
for (let i = 0; i < lp; i++) {
     let le = allMyRecords[i].length;
     for (let j = 0; j < le; j++) {
         console.log(allMyRecords[i][j]);
     }
}

const filteredLapRoundsWithForLoop = function () {
    let newArray = [];
    for (let i = 0; i < lapRounds.length; i++) {
 
        if (lapRounds[i] < 4) {
            newArray.push(lapRounds[i]);
        }
    }
    return newArray;
}

console.log(filteredLapRoundsWithForLoop())
console.log(lapRounds.filter(time => time < 4));