//Exercise 2
const winBattle = () => {
    return true;
}

let experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);


//Exercise 3 
const isString = (word) => typeof word === 'string' ? true : false;
console.log(isString('hello')); 
console.log(isString([1, 2, 4, 0]));

//Exercise 4
const sumCalc = (a,b) => {return (a+b)};
console.log(sumCalc(5,3));

//Exercise 5

// Function declaration
function weightInGramsDeclaration(weight) {
    return weight * 1000;
}
console.log(weightInGramsDeclaration(2));

// Function expression
const weightInGramsExpression = function(weight) {
    return weight * 1000;
};
console.log(weightInGramsExpression(2));

// Difference: function declarations are hoisted (usable before their definition), function expressions are not.

// Arrow function (one line)
const weightInGrams = (weight) => weight * 1000;
console.log(weightInGrams(2));


// Exercise 6
(function (numChildren = "<number of children>",
    partnersName = "<partner's name>",
    geographicLocation = "<geographic location>",
    jobTitle = "<jobTitle>") {console.log(`You will be ${jobTitle} in ${geographicLocation}
        and married to ${partnersName} with ${numChildren}`)})();

//Exercise 7
let navBar = document.getElementById("navBar");
(function () {
    let name = prompt("What is your name? ");
    let div = document.createElement("div");
    let nameText = document.createTextNode(name)
    div.appendChild(nameText);
    navBar.appendChild(div);
})();

//Exercise 8 
//Part I

function makeJuice(size) {
    function addIngredients(firstIng, secondIng, thirdIng) {
        let div = document.createElement("div");
        let divText = document.createTextNode(
            `The client wants a ${size} juice, containing ${firstIng}, ${secondIng}, ${thirdIng}`
        );
        div.appendChild(divText);
        document.body.appendChild(div);
    }
    addIngredients("Apple", "Mango", "Banana");
}

makeJuice("small");

//Part II

function makeJuice2(size) {
    let ingredients = [];

    function addIngredients(firstIng, secondIng, thirdIng) {
        ingredients.push(firstIng, secondIng, thirdIng);
    }

    function displayJuice() {
        let div = document.createElement("div");
        let divText = document.createTextNode(
            `The client wants a ${size} juice, containing ${ingredients.join(", ")}`
        );
        div.appendChild(divText);
        document.body.appendChild(div);
    }

    addIngredients("Apple", "Mango", "Banana");
    addIngredients("Strawberry", "Kiwi", "Pineapple");
    displayJuice();
}

makeJuice2("large");