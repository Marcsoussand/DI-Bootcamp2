//Exercise 1: Colors

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];


//1. Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
colors.forEach((number, index) => {
    console.log(`${index+1}# choice is ${number}`);
});

//2. Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")

console.log(colors.some((color) => { return (color === 'Violet')}));

// Exercise 2 : Colors #2

const colors2 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors2.forEach((color,index) => {
    let i = index + 1;
    index < 3 ? console.log(`${i}${ordinal[i]} choice is ${color}`) : console.log(`${i}${ordinal[0]} choice is ${color}`);
})

//Exercise 3 Analyzing
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// I expect to get ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// ------2------
// const country = "USA";
// console.log([...country]);

// I expect to see ["U","S","A"]

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

// expected result : [undefined, undefined]

//Exercise 4 : Employees

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const newUsersArray = users.map((value) => {
    return `Hello ${value.firstName}`;
});

console.log(newUsersArray);

//Exercise 5 : Star Wars

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

console.log(epic.reduce((a,b) => a+" "+b));

// Exercise 6 : Employees #2

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const studentsPassed = students.filter(students => students.isPassed);
console.log(studentsPassed);

//2. Bonus

studentsPassed.forEach((student) => {console.log(`Good Job ${student.name} you passed the course in ${student.course}`)});



