const firstName = "Daniel",
    lastName = "de Cloet",
    age = 17;
console.log(`Hello, I'm ${firstName} ${lastName} and I'm ${age} y.o.`);

const priceOfApple = '0.59',
    numberOfApples = 200;
console.log(`Price to pay is \$${Number(priceOfApple) * numberOfApples}`);

let tempToday = 20,
    tempYesterday = 25;
if (tempToday > tempYesterday) {
    console.log("Today was hotter than yesterday.");
} else if (tempYesterday > tempToday) { 
    console.log("Yesterday was hotter than today.");
} else {
    console.log("Today and yesterday were the same temperature");
}

let date = new Date();
let message = "Today is " + date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
console.log(message);

let college = "Please visit the HZ University of Applied Sciences";
console.log(college.replace("Applied", "Mad"));