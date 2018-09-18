// assigning variables
const num = 1400,
    str = "Ik woon in Naboo"
// comparing string to number
if (num == str) {
    // this would never be triggered, so could as well be removed
    console.log("The number equals the string... somehow")
} else {
    // this is the default output.... should always triggered. If statement could be removed
    console.log("The number does not equal the string, this will always trigger")
}