//the name, height, gender, birth year, and home world of the character.
let swName;
let height;
let gender;
let birth_year;
let homeworld;

async function getCharacter () {
    //Clearance of eventual previous people:
    document.querySelectorAll(".people").forEach(div => div.remove());
    //Starting spinner (or rather make it visible)
    const spinner = document.querySelector('.fa-3x');
    spinner.style.display = 'block';
    let randomPeople = Math.floor(Math.random() * 83) + 1;
    try {
        //Fetch character
    let character = await fetch(`https://www.swapi.tech/api/people/${randomPeople}`);
    let response = await character.json(); 
    let data = response.result.properties;
    console.log(data);
    swName = data.name;
    height = data.height;
    gender = data.gender;
    birth_year = data.birth_year;
    console.log(data.homeworld);
    let homeworldLink = await fetch(data.homeworld);
    let homeworldJSON = await homeworldLink.json()
    homeworld = homeworldJSON.result.properties.name;
    //Remove spinner
    spinner.style.display = 'none';
    } catch (error) {
        let errorMessage = document.createElement("div");
        let errorMessageText = document.createTextNode("Oh No! That person is not available");
        errorMessage.appendChild(errorMessageText);
        document.getElementById("people").appendChild(errorMessage);
    }
    let namediv = document.createElement("div");
    let namedivText = document.createTextNode(swName);
    namediv.classList.add("people", "nameTitle");
    namediv.appendChild(namedivText);
    let heightdiv = document.createElement("div");
    let heightdivText = document.createTextNode(`Height: ${height}`);
    heightdiv.classList.add("people", "basic");
    heightdiv.appendChild(heightdivText);
    let genderdiv = document.createElement("div");
    let genderdivText = document.createTextNode(`Gender: ${gender}`);
    genderdiv.classList.add("people", "basic");
    genderdiv.appendChild(genderdivText);
    let birth_yeardiv = document.createElement("div");
    let birth_yeardivText = document.createTextNode(`Birth Year: ${birth_year}`);
    birth_yeardiv.classList.add("people", "basic");
    birth_yeardiv.appendChild(birth_yeardivText);
    let homeworlddiv = document.createElement("div");
    let homeworlddivText = document.createTextNode(`Home World: ${homeworld}`);
    homeworlddiv.classList.add("people", "basic");
    homeworlddiv.appendChild(homeworlddivText);
    document.getElementById("people").append(namediv, heightdiv, genderdiv, birth_yeardiv, homeworlddiv);
}
