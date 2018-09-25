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

function animal(type) {
    let sound = ''
    switch(type) {
        case "horse":
            sound = 'neigh';
            break;
        case "cat":
            sound = 'meow';
            break;
        case "dog":
            sound = 'woof';
            break;
        case "mouse":
            sound = 'squeek';
            break;
        default:
            sound = '*just silence* (animal unknown)';
            break;
    }
    console.log(sound)
}