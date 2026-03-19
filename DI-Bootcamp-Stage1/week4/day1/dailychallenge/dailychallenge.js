const getGiphy = (input) => {
    return fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&rating=g&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
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

document.getElementById("myForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    // console.log("before");
    let input = document.getElementById("inputUser").value;
    // console.log("input",input);
    let result = await getGiphy(input)
    // console.log(result);
    let div = document.createElement("div");
    div.classList.add("giphy-card");
    let btn = document.createElement("button");
    let remove = document.createTextNode("Delete");
    btn.appendChild(remove);
    let newGiphy = document.createElement("img");
    newGiphy.alt = input;
    newGiphy.src = result.data[0].images.original.url;
    div.appendChild(newGiphy);
    div.appendChild(btn);
    btn.addEventListener("click", () => {
        div.remove();
    });
    document.body.appendChild(div);
})

let deleteAll = document.getElementById("deleteAll");
deleteAll.addEventListener("click", () => {
    try {
        let allDivs = document.querySelectorAll(".giphy-card");
        if (allDivs.length === 0) throw new Error("Aucun gif à supprimer");
        allDivs.forEach((div) => div.remove());
    } catch (error) {
        console.log(error.message);
    }
})

