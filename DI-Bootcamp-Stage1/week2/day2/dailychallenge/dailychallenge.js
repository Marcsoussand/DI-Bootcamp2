let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturne', 'Uranus', 'Neptune']
let divArray = [];
let planetColors = ['brown', 'orange', 'blue', 'red', 'white','yellow', 'green','light blue']
const style = document.getElementsByTagName('style')[0]
console.log(style);


for (let i in planets) {
    divArray[i] = document.createElement('div');
    divArray[i].classList.add('planet');
    divArray[i].classList.add(planets[i]);
    document.body.getElementsByClassName('listPlanets')[0].appendChild(divArray[i]);
    console.log(`\n .${planets[i]} { background: ${planetColors[i]}}`);
    
    style.textContent += `\n.${planets[i]} { background: ${planetColors[i]}}`
}
console.log(divArray);


// divMercury = document.createElement("div");
// divMercury.classList.add('planet');
// divMercury.classList.add('mercury');
// style.textContent += "\n .mercury {background: green}"