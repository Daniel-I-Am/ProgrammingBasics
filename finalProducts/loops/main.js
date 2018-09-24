// recursive fibonacci
function fib(a,b) {
    console.log(b);
    if (a != Infinity && b != Infinity) {
        fib(b,a+b);
    }
}

// fibonacci the stupid way, using a while loop
function fibTheStupidWay() {
    let i = 0,
        a = 0,
        b = 1;
    while (i < 25) {
        console.log(b);
        // assign the value of a to b and b to a + b in a oneliner, just because we can. 
        b = [a+b, a = b][0];
        i++;
    }
}

// check if number is divisible by factor
function div(n, f) {
    return n % f == 0;
}

// loop through array and check if is divisible by 4
function deelbaar() {
    let i = 0;
    const arr = [4,8,16,20,60,80,24],
        factor = 4;
    const l = arr.length;
    while (div(arr[i], factor)) {
        i++;
        if (i == l) {
            console.log("Divisible by 4");
            return;
        }
    }
    console.log("Not divisible by 4");
}

// sum array
function sum(arr) {
    let total = 0;
    for (let i = arr.length; i > 0; i--) {
        if (typeof arr[i-1] == "number") total += arr[i-1];
    }
    return total;
}