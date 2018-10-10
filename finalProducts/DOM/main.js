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
    const list = document.getElementById("courses"),
        colors = ["none", "#cc1199"];
    // loop through colors and apply them to list
    Array.prototype.forEach.call(list.children, (e, i) => {
        e.style = `background-color: ${colors[i%colors.length].toString()}`;
    });

    // for (let i = 0; i < list.children; i++) {
    //     let e = list.children[i];
    //     e.style = `background-color: ${colors[i%colors.length].toString()}`;
    // }
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