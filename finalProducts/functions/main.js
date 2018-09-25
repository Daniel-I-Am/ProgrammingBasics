function fib(a,b) {
    // if anything's infinity, stop
    if (a == Infinity || b == Infinity) return;
    // otherwise log our number and call the same function with the next values
    console.log(b);
    fib(b, a+b);
}

function countdown(n) {
    // if we don't supply a number, stop
    if (typeof n != "number") return;
    // if we're at 0, stop and give string
    if (n == 0) {
        let date = new Date()
        console.log(n, "Happy " + date.getFullYear());
    } else {
        // log number and countdown previous
        console.log(n);
        countdown(n-1);
    }
}

function hoist() {
    console.log("log x")
    console.log(x)
    console.log("declare x")
    var x = 5;

    console.log("log result of f()")
    console.log(f())
    console.log("define function f()")
    function f() { return 42 }
    // the function could be called before it was declared but the variable `x` couldn't
}