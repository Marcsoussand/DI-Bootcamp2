let shoppingList = [];
let newForm = document.createElement("form");
let newText = document.createElement("input");
let addBtn = document.createElement("button");
let textBtn = document.createTextNode("Add Item");
newForm.appendChild(newText);
newForm.addEventListener("submit",(e) => addItem(e))
addBtn.appendChild(textBtn);
newForm.appendChild(addBtn);
document.body.appendChild(newForm);

function addItem (e) {
    e.preventDefault()
    shoppingList.push(newText.value);
    console.log(shoppingList);
}

let clearBtn = document.createElement("button");
let clearAllText = document.createTextNode("ClearAll");
clearBtn.appendChild(clearAllText);
clearBtn.addEventListener("click", (e) => clearAll(e));
document.body.appendChild(clearBtn);

function clearAll(e) {
    e.preventDefault();
    shoppingList = [];
}