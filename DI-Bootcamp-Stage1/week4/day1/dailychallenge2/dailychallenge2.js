let sunrise = document.getElementById("sunrise");

sunrise.addEventListener("submit", (event) => {
    event.preventDefault();
    let lat1 = document.getElementById("lat1").value;
    let lon1 = document.getElementById("lon1").value;
    let lat2 = document.getElementById("lat2").value;
    let lon2 = document.getElementById("lon2").value;

    let city1 = fetch(`https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${lon1}`)
        .then((response) => response.json());

    let city2 = fetch(`https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${lon2}`)
        .then((response) => response.json());

    Promise.all([city1, city2]).then(([result1, result2]) => {
        console.log("City 1, sunrise Time:", result1.results.sunrise);
        console.log("City 2, sunrise Time:", result2.results.sunrise);
    });
})