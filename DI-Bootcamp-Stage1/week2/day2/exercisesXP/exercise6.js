navBar = document.getElementById("navBar").setAttribute("id","socialNetworkNavigation")

newLi = document.createElement('li');
newNode = document.createTextNode('Logout');
newLi.appendChild(newNode);

document.getElementsByTagName("ul")[0].appendChild(newLi);

console.log(document.getElementsByTagName("ul")[0].firstElementChild.textContent);
console.log(document.getElementsByTagName("ul")[0].lastElementChild.textContent);