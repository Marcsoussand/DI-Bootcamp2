myForm = document.forms.libform;
myForm.addEventListener("submit",getInputs);

function getInputs(e) {
    e.preventDefault();
    let noun = document.getElementById("noun");
    let adjective = document.getElementById("adjective");
    let person = document.getElementById("person");
    let verb = document.getElementById("verb");
    let place = document.getElementById("place");

    if (noun && adjective && person && verb && place){
        let story = document.getElementById("story");
        story.innerHTML = `${person.value} the ${adjective.value} often called ${noun.value} used to ${verb.value} in ${place.value}`
    }
    console.log(noun.value, adjective.value, person.value, verb.value, place.value);
}

