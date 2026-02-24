//1. Retrieve the form and console.log it.
let formTag = document.getElementsByTagName("form")[0];
console.log(formTag);

//2. Retrieve the inputs by their id and console.log them.
let inputFirstName = document.getElementsByName("firstname")[0];
let inputLastName = document.getElementsByName("lastname")[0]

console.log(inputFirstName);
console.log(inputLastName);

//4. When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ? To avoid empty entry
// get the values of the input tags,
//make sure that they are not empty,
//create an li per input value,
//then append them to a the <ul class="usersAnswer"></ul>, below the form.

let inputSubmit = document.getElementById("submit");
inputSubmit.addEventListener("click",appendNewLi);
let usersAnswer = document.getElementsByClassName("usersAnswer")[0]

function appendNewLi(event) {

    event.preventDefault()
    if(inputFirstName.value && inputLastName.value) {
        let firstNameLi = document.createElement("li")
        let fnLiText = document.createTextNode(inputFirstName.value);
        firstNameLi.appendChild(fnLiText);
        let lastNameLi = document.createElement("li")
        let lnLiText = document.createTextNode(inputLastName.value);
        lastNameLi.appendChild(lnLiText);
        usersAnswer.appendChild(firstNameLi);
        usersAnswer.appendChild(lastNameLi);
    }
}


