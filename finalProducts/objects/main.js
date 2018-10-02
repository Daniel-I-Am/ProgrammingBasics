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
        hoursPerWeek: 50
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino",
        salary: 850,
        hoursPerWeek: 0
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple",
        salary: 900,
        hoursPerWeek: 20
    }
];

// print sentence, per teacher object
teachers.forEach(obj => console.log(`I have a ${obj.profession} named ${obj.name} and he likes to work on a${function() { if (obj.brand.toLowerCase().match(/^[aiouey]/)) {return "n"} return ""}()} ${obj.brand} computer. I earn €${obj.salary / obj.hoursPerWeek} per hour`));