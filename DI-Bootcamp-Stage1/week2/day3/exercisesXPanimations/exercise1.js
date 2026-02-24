//Part I In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

setTimeout(helloWorld,2000);

function helloWorld() {
    alert("Hello World !!")
}

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

setTimeout(newParagraph,2000);
function newParagraph() {
    let newp = document.createElement("p");
    let pText = document.createTextNode("Hello World");
    newp.appendChild(pText);
    let divId = document.getElementById("container");
    divId.appendChild(newp);
    //question 4 of part III
    if (divId.getElementsByTagName('p').length >= 5) {
        clearInterval(myInterval);
    }
}

//Part III
//In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

let myInterval = setInterval(newParagraph,2000)

let btn = document.getElementById("clear");
btn.addEventListener("click",() => {clearInterval(myInterval)});

