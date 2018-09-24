// opdracht 0
let i = 0;
while (i < 10) {
    i++;
    console.log(i);
}
i = 0


// opdracht 1
let dagarray = new Array('zondag','maandag','dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag');
let date = new Date;
let dag = dagarray[date.getDay()];
let string = "Het is " + dag + "!";
let len = string.length;

while (i < len) {
    console.log(string.charAt(i))
    i++;
}

// opdracht 2
string = "Geweldig!";
let newString = "";
i = string.length;

while (i > 0) {
    i--;
    newString += string.charAt(i);
}
console.log(newString);

console.log(string.split("").reverse().join(""));