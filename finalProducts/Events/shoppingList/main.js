let inputFields,
    errorField,
    shoppingList,
    total = 0;

function submit(event) {
    let name = inputFields[0].value;
    let amount = Number(inputFields[1].value);
    let price = Number(inputFields[2].value);
    if (name == "")  {err("Please provide a name");    return;}
    if (amount == 0) {err("Please provide an amount"); return;}
    err();
    let hasDupe = false;
    Array.prototype.forEach.call(shoppingList.children, (e, i) => {
        if (i <= 0) return;
        if (name.toLowerCase() == e.children[1].innerHTML.toLowerCase() && price == Number(e.children[3].innerHTML)) {
            hasDupe = true;
            e.children[2].innerHTML = Number(e.children[2].innerHTML) + amount;
        }
    });
    if (!hasDupe) {
        addToList(name, amount, price);
        console.log(`Adding new item ${name}`);
    } else {
        console.log(`Adding ${amount} to ${name}`);
        sum();
    }
}

function err(message) {
    if (message) {
        errorField.innerHTML = "Notice: " + message;
    } else {
        errorField.innerHTML = "";
    }
}

function init() {
    document.getElementById("submitInput").addEventListener('click', submit);
    shoppingList = document.getElementById("shoppingList");
    errorField = document.getElementById("errorField");
    inputFields = [
        document.getElementById("nameInput"),
        document.getElementById("amountInput"),
        document.getElementById("priceInput"),
    ];
}

function addToList(name, amount, price) {
    let tr = document.createElement("tr");
    tr.appendChild(document.createElement("td"))
    for (var e of [name, amount, price, "remove"]) {
        let td = document.createElement("td");
        td.innerHTML = e;
        tr.appendChild(td)
    }
    let removeBtn = tr.lastChild
    removeBtn.addEventListener('click', remove)
    removeBtn.className = "removeBtn";  
    shoppingList.appendChild(tr);
    sum();
}

function remove(evt) {
    let target = evt.target;
    target.parentNode.parentNode.removeChild(target.parentNode);
    sum();
}

function sum() {
    total = 0;
    let elem = shoppingList.children;
    for (let i = 1; i < elem.length; i++) {
        total += Number(elem[i].children[2].innerHTML) * Number(elem[i].children[3].innerHTML);
    }
    document.getElementById("totalDisplay").innerHTML = `€${Math.floor(total).toString()},${function() {let n = Math.round((total%1)*100).toString(); if (n.length == 1) return "0" + n; return n}()}`;
}

window.addEventListener('load', init);