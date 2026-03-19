//Exercise 1
const getGiphy = () => {
    console.log("Before Fetch");
    return fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error");
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            return data;
        });
};

getGiphy();

//Exercise 2 

const getGiphy2 = () => {
    console.log("Before Fetch");
    return fetch("https://api.giphy.com/v1/gifs/search?q=sun&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error");
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            return data;
        });
};

getGiphy2();

//Exercise 3

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

async function ex3() {
    try{
        let starship = await fetch("https://www.swapi.tech/api/starships/9/");
        let data = await starship.json();
        let result = await data.result;
        console.log(result);
    } catch (err){
        console.log("Error: ", err);
    }

}

ex3();

//Exercise 4 

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

//result should be calling then 2 seconds then resolved. 