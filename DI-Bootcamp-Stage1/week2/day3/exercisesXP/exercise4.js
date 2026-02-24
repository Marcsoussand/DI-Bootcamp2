
let submitButton = document.getElementById('submit');
submit.addEventListener('click',sphereCalculation);
let radius = document.getElementById("radius");
let volume = document.getElementById("volume");

function sphereCalculation(event) {
    event.preventDefault();
    let result = Math.pow(parseInt(radius.value),3) * Math.PI * 4/3    
    volume.value = result;
}


