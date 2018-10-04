// constant object
const lapRoundsArr = [55.99,  63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12];
const lapRoundsObj = Object.assign({}, lapRoundsArr);
console.log(lapRoundsObj)

// teacher object array 
const teachers = [
    {
        name: "Loek",
        profession: "Teacher",
        brand: "Linux",
        salary: NaN,
        hoursPerWeek: 50,
        salaryPerHour: function() {return this.salary/this.hoursPerWeek}
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino",
        salary: 850,
        hoursPerWeek: 0,
        salaryPerHour: function() {return this.salary/this.hoursPerWeek}
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple",
        salary: 900,
        hoursPerWeek: 20,
        salaryPerHour: function() {return this.salary/this.hoursPerWeek}
    }
];

// print sentence, per teacher object
teachers.forEach(obj => console.log(`I have a ${obj.profession} named ${obj.name} and he likes to work on a${
    function() { if (obj.brand.toLowerCase().match(/^[aiouey]/)) {return "n"} return ""}()} ${
        obj.brand} computer. I earn €${obj.salaryPerHour()} per hour`));


for (let i = 0; i < teachers.length; i++) {
    const element = teachers[i];
    console.log(element.salaryPerHour())
}