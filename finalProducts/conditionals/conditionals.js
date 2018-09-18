function exercise0() {
    let grade = 7;
    if (grade < 1 || typeof grade != "number") {
        console.log("Invalid grade");
    } else if (grade < 6) {
        console.log("Onvoldoende");
    } else if (grade < 7) {
        console.log("Voldoende");
    } else if (grade < 9) {
        console.log("Goed");
    } else if (grade >= 9) {
        console.log("Uitmunted");
    }
}

function exercise1() {
    let grade = 7;
    switch (typeof grade) {
        case "number":
            switch (grade) {
                case 10:
                    console.log("Uitmuntend");
                    break;
                case 9:
                case 8:
                    console.log("Goed");
                    break;
                case 7:
                    console.log("Voldoende");
                    break;
                case 6:
                    console.log("Voldoende");
                    break;
                default: 
                    console.log("Onvoldoende");
            }
            break;
        default:
            console.log("Invalid grade")
    }
}

function exercise2() {
    purchasedBook = true;
    job = "teacher";
    inTrain = false;
    isTeacher = (job == "teacher")
    if (purchasedBook) {
        if (isTeacher) {
            // teacher + book
            if (inTrain) {
                // train
                console.log("Finally, I can enjoy my book!")
            } else {
                // !train
                console.log("I don't have time to enjoy my book.")
            }
        } else {
            // !teacher + book
            if (inTrain) {
                // train
                console.log("I'm not interested in books.")
            } else {
                // !train
                console.log("I'm not interested to read a book and don't have a cozy place to do so.")
            }
        }
    } else {
        if (isTeacher) {
            // teacher + !book
            if (inTrain) {
                // train
                console.log("Well, I'm in a train, but don't have a book...")
            } else {
                // !train
                console.log("I may be a teacher, but I don't travel often.")
            }
            
        } else {
            // !teacher + !book
            if (inTrain) {
                // train
                console.log("I'm just playing on my phone this entire trip.")
            } else {
                // !train
                console.log("I'm not a teacher, I don't own a book, I'm not in a train. Why are you even asking?")
            }
        }
    }
}