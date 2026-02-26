let select = document.getElementById('genres');
console.log(select.value);
let newOption = document.createElement("option");
newOption.selected = true;
let optionText= document.createTextNode("Classic");
newOption.value = "classic";
newOption.appendChild(optionText);
select.appendChild(newOption);