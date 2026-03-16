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

//Exercise 3
const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArray = Object.entries(users);
console.log(usersArray);
//2. Modify the outcome of part 1, by multipling the user’s ID by 2.
let usersArray2 = []
for (let [key, value] of Object.entries(users)) {
  usersArray2.push([key, value*2]);
}
console.log(usersArray2);

//Exercise4

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

//Output Expected = object

//Exercise 5 
class Dog {
  constructor(name) {
    this.name = name;
  }
};

  // 2 is the correct one
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

//Exercise 6 

// [2] === [2] 
// {} === {}
//False for both as they are reference types

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4; //4
console.log(object3.number) //4
console.log(object4.number) //5