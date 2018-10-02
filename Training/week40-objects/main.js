// me object
let me = {
    name: "Daniel",
    age: 17,
    previousDiploma: "High School"
}

console.log(me);

// add value
me.currentStudy = "HBO-ICT"
console.log(me)

// random stuff ;p
function f(x) {
    console.log(x*x);
}

let newObj = {
    children: [
        me,
        {
            name: "You",
            age: NaN
        }
    ],
    abc1: 1,
    abc2: 2,
    someFunc: f,
    otherFunc: function(x) {
        console.log(x+1);
    }
}

console.log(newObj)
newObj.someFunc(2)
newObj.otherFunc(7)

// more stuff
let transport = {
    type: "bicycle",
    wheels: 2
}

me.transport = transport
me.pets = ["Fina", "Bonie", "Milou", "Missy", "Castor"]

// console.log(`My favorite transport method is ${me.transport.type} and it has ${me.transport.wheels.toString()} wheels`)
// me.pets.forEach(pet => console.log(pet))

me.transportFunc = function() { return `My favorite transport method is a(n) ${this.transport.type} and it has ${this.transport.wheels.toString()} wheels` }
me.names = function() { return this.pets.join('\n')}
me.get = function(index) { return this[index]}

console.log(me.transportFunc())
console.log(me.names())
console.log(me.get('age'))