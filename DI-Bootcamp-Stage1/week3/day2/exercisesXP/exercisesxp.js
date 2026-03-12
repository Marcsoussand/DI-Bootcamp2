//Exercise 1:
//  Analyze the code below. What will be the output?
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//Expecting I am John Doe, from Vancouver, Canada. Latitude 49..., Longitude -123...

//Exercise 2
function displayStudentInfo(objUser){
    //destructuring
    const {first, last} = objUser;
    console.log(`Your full name is ${first} ${last}`);
    
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});