let btn = document.getElementsByTagName("input")[0];
let colorSelect = document.getElementById("colorSelect");

btn.addEventListener("click", () => removeColor() );

function removeColor() {
    let color = colorSelect.value
    console.log(color)
    let colorToRemove = Array.from(colorSelect.options).find(opt => opt.text === color);
    console.log(colorToRemove);
    
    colorToRemove.remove();
}