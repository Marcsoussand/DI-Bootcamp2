let colors = ['red', 'orangered', 'orange', 'yellow', 'yellowgreen', 'lightgreen', 
    'green','turquoise', 'aqua', 'lightskyblue', 'dodgerblue', 'blue',
    'darkblue', 'indigo', 'darkmagenta', 'violet', 'lightpink', 'lightgray',
    'gray','black','white']
let colorGrid = document.getElementById("colorGrid");
let grid = document.getElementById("grid");
let storedColor;
let isMouseDown = false;

for (let color of colors) {
    let div = document.createElement("div")
    div.classList.add("colorLeft");
    div.style.backgroundColor = color;
    div.addEventListener("click",(e) => storeColor(e));
    colorGrid.appendChild(div);
    
}

for (let i = 0; i < 1440 ;i++){
    let cell = document.createElement("div");
    cell.classList.add("smallCell");
    cell.addEventListener("mousedown",() => isMouseDown = true);
    cell.addEventListener("mouseover",(e) => draw(e))
    grid.appendChild(cell);
}

function storeColor(e) {
    e.preventDefault();
    storedColor = e.target.style.backgroundColor;
    flagColor = true;
    console.log(storedColor);
}

function draw(e) {
    e.preventDefault();
    if (isMouseDown) {
    e.target.style.backgroundColor = storedColor;
    }
}

function clearGrid () {
    document.querySelectorAll('.smallCell').forEach(cell => {
        cell.style.backgroundColor = 'white';
    }
    );
}

document.addEventListener("mouseup", () => isMouseDown = false)