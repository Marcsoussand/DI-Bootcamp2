//Exercise 1
let numbers = [123, 8409, 100053, 333333333, 7]

for (number in numbers) {
    if (numbers[number] % 3 === 0) {
        console.log("True")
    } else {
        console.log("False")
    }
}

//Exercise 2: Attendance
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

student_name = prompt("Please enter your name: ")
if (student_name in guestList) {
console.log(`Hi! I'm ${student_name}, and I'm from ${guestList[student_name]}.`);
} else {
    console.log("Hi! I'm a guest");
}

// Exercise 3: Playing with Numbers
let age = [20,5,12,43,98,55];
//1. Console.log the sum of all the numbers in the age array.
sum_age = 0;
for (let i =0;i<age.length;i++) {
    sum_age += age[i];
}
console.log(sum_age);
//2. 2. Console.log the highest age in the array.
highest_age = age[0];
for (let i =1;i<age.length;i++) {
    if (age[i] > highest_age) {
        highest_age = age[i]
    }
}
console.log(highest_age)

