// define global variables
let inputFields,
    errorField,
    shoppingList,
    total = 0;

// function submit, called on button press
function submit(event) {
    // get inputs from form
    let name = inputFields[0].value;
    let amount = Number(inputFields[1].value);
    let price = Number(inputFields[2].value);
    // return errors
    if (name == "")  {err("Please provide a name");    return;}
    if (amount == 0) {err("Please provide an amount"); return;}
    err();
    // check if match in list
    let hasDupe = false;
    // loop through table rows
    Array.prototype.forEach.call(shoppingList.children, (e, i) => {
        // skip first element (table heading)
        if (i <= 0) return;
        // check name and price
        if (name.toLowerCase() == e.children[1].innerHTML.toLowerCase() && price == Number(e.children[3].innerHTML)) {
            // set dupe
            hasDupe = true;
            // update value in table
            e.children[2].innerHTML = Number(e.children[2].innerHTML) + amount;
        }
    });
    if (!hasDupe) {
        // add new item to list
        addToList(name, amount, price);
        console.log(`Adding new item ${name}`);
    } else {
        // report that value got updated
        console.log(`Adding ${amount} to ${name}`);
        // update total value
        sum();
    }
}

function err(message) {
    // if there's a message, report it, otherwise clear message
    if (message) {
        errorField.innerHTML = "Notice: " + message;
    } else {
        errorField.innerHTML = "";
    }
}

// init function
function init() {
    // add event listener to button
    document.getElementById("submitInput").addEventListener('click', submit);
    // assign global variables
    shoppingList = document.getElementById("shoppingList");
    errorField = document.getElementById("errorField");
    inputFields = [
        document.getElementById("nameInput"),
        document.getElementById("amountInput"),
        document.getElementById("priceInput"),
    ];
}

function addToList(name, amount, price) {
    // create new row
    let tr = document.createElement("tr");
    // append empty td (hidden column)
    tr.appendChild(document.createElement("td"))
    // loop through 4 values
    for (var e of [name, amount, price, "remove"]) {
        // create cell
        let td = document.createElement("td");
        // set innerHTML
        td.innerHTML = e;
        // append to row
        tr.appendChild(td)
    }
    // get the last child
    let removeBtn = tr.lastChild
    // add onclick event to the remove cell
    removeBtn.addEventListener('click', remove)
    // set the class (for styling)
    removeBtn.className = "removeBtn";  
    // append it to the table
    shoppingList.appendChild(tr);
    // update total
    sum();
}

function remove(evt) {
    let target = evt.target;
    target.parentNode.parentNode.removeChild(target.parentNode);
    sum();
}

function sum() {
    // reset total value
    total = 0;
    // loop through shopping list rows
    let elem = shoppingList.children;
    // sum amount*value
    for (let i = 1; i < elem.length; i++) {
        total += Number(elem[i].children[2].innerHTML) * Number(elem[i].children[3].innerHTML);
    }
    // display total
    document.getElementById("totalDisplay").innerHTML = `€${Math.floor(total).toString()},${function() {let n = Math.round((total%1)*100).toString(); if (n.length == 1) return "0" + n; return n}()}`;
}

// make init() trigger when loading of the page has been finished
window.addEventListener('load', init);