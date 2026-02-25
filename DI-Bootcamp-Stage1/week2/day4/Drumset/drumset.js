let boxesLetter = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
let datakeys = ['65','83','68','70', '71', '72','74','75','76'];
let boxesSound = ['Boom', 'Clap', 'HiHat', 'Kick', 'OpenHat', 'Ride', 'Snare', 'Tink', 'Tom'];
const container = document.getElementById("container");

for (let letter in boxesLetter) {
    let div = document.createElement("div");
    div.classList.add("boxes");
    div.setAttribute("data-keys",datakeys[letter]);
    div.addEventListener("click", () => playSound(boxesSound[letter]));
    let h1 = document.createElement("h1");
    let h1Text = document.createTextNode(boxesLetter[letter]);
    h1.appendChild(h1Text);
    let span = document.createElement("span");
    let spanText = document.createTextNode(boxesSound[letter]);
    span.appendChild(spanText);
    div.appendChild(h1);
    div.appendChild(span);
    container.appendChild(div);
}

function playSound(sound) {
    console.log(sound);
    const audio = new Audio(`${sound.toLowerCase()}.wav`);
    audio.play();
}

window.addEventListener("keydown", (e) => {
    const index = boxesLetter.indexOf(e.key.toUpperCase());
    if (index === -1) return;
    playSound(boxesSound[index]);
});