/*
// opdracht 0
let i = 0;
while (i < 10) {
    i++;
    console.log(i);
}
i = 0;

// opdracht 1
let dagarray = new Array('zondag','maandag','dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag');
let date = new Date;
let dag = dagarray[date.getDay()];
let string = "Het is " + dag + "!";
let len = string.length;

while (i < len) {
    console.log(string[i]);
    i++;
}

// opdracht 2
let newString = "";
string = "Geweldig!";
i = string.length;

while (i > 0) {
    i--;
    newString += string[i];
}
console.log(newString);

console.log(string.split("").reverse().join(""));
*/

// opdracht 0
for (let i = 0; i < 10; i++) {
    console.log(i+1);
}

// opdracht 1
let dagarray = new Array('zondag','maandag','dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'),
    date = new Date;
let dag = dagarray[date.getDay()];
let string = "Het is " + dag + "!";
let len = string.length;
for (let i = 0; i < len; i++) {
    console.log(string[i]);
}

// opdracht 2
let newString = "";
string = "Geweldig!";

for (let i = string.length; i > 0; i--) {
    newString += string[i-1];
}
console.log(newString);