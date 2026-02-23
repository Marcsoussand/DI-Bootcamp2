let initialDiv = document.getElementById("container");
console.log(initialDiv);

let peteList = document.body.getElementsByClassName("list")[0].lastElementChild.innerHTML
peteList = "Richard"
console.log(peteList);

let toDelete = document.body.getElementsByClassName("list")[1].firstElementChild.nextElementSibling
console.log(toDelete.remove());

listsArray = document.body.getElementsByClassName("list")
console.log(listsArray);

for (element of listsArray) {
    console.log(element);
    
    element.firstElementChild.innerHTML = 'Marc'
}
for (element of listsArray) {
    element.classList.add("student_list")
}

document.body.getElementsByClassName("list")[0].classList.add("university")
document.body.getElementsByClassName("list")[0].classList.add("attendance")

initialDiv.style.backgroundColor = 'lightblue';
initialDiv.style.padding = '5px';

let test = document.body.getElementsByClassName("list")[1].lastElementChild.style.display = 'none'
console.log(test);




