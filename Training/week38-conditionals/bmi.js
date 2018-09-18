let length = 185, // length in cm
    weight = 55   // weight in kg

let bmi = Math.round((weight / ((length / 100) ^ 2)) * 100) / 100
console.log("BMI =", )

if (typeof bmi == "number") {
    if (bmi < 18.5) {
        console.log("Underweight")
    } else if (bmi < 24.9) {
        console.log("Normal")
    } else if (bmi < 29.9 ) {
        console.log("Slightly fat")
    } else {
        console.log("Overweight")
    }
} else {
    console.log("NaN")
}