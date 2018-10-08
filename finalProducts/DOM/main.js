function grades() {
    let grades = document.getElementById("grades").children[0].children,
        len = grades.length,
        sum = 0,
        averageTableElem = document.createElement("tr");

    // sum all values
    for (let i = 0; i < len; i++) {
        sum += Number(grades[i].children[1].innerHTML)
    }
    // calculate average
    let avg = Math.round(sum/len*10)/10;

    // loop the following twice
    for (i = 0; i < 2; i++)
        averageTableElem.appendChild(document.createElement("td"));

    // insert `average grade` and the average grade
    averageTableElem.children[0].innerHTML = "Average Grade";
    averageTableElem.children[1].innerHTML = avg;
    // add element to document
    grades[0].parentElement.appendChild(averageTableElem);
}

function colors() {
    // get the list and define colors
    let list = document.getElementById("courses"),
        colors = ["#aabbcc", "#cc1199", "#123456", "#a1b2c3", "#192837", "#204792", "#347891"];
    // loop through colors and apply them to list
    colors.forEach((e, i) => {
        list.children[i].style = `background-color: ${e.toString()}`;
    });
}

function createImageElement(imageSrcName) {
    // create img element
    let img = document.createElement("img");
    // set source
    img.src = imageSrcName;
    // append to document
    document.body.appendChild(img)
}

function whenLoaded() {
    grades();
    colors();
    for (let i = 600; i<650; i++)
        createImageElement(`//unsplash.it/800/${i}`);
}