function fib(a,b) {
    if (a == Infinity || b == Infinity) return;
    console.log(b);
    fib(b, a+b);
}

function countdown(n) {
    if (typeof n != "number") return;
    if (n == 0) {
        let date = new Date()
        console.log(n, "Happy " + date.getFullYear());
    } else {
        console.log(n);
        countdown(n-1);
    }
}