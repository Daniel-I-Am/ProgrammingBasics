let g = 
    {f: function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return function() {return NaN}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

console.log(g.f()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()())

let h = 
    {f: function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {if (x) { return function(x) {return x}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
x = 100
console.log(h.f(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)(x))

function dec2bin(dec){
    let s = (dec >>> 0).toString(2);
    if (s.length < 16) {
        s = "0".repeat(16-s.length) + s
    }
    s = '0b' + s.substring(1, 9) + " " + s.substring(8)
    return s;
}

function f(n) {
    n = n || 0
    console.log(dec2bin(n))
    if (n == 11392) {return}
    f(n+1)
}

f()