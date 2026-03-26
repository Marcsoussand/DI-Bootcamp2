"use strict";
// Exercise 1: Hello, World! Program
// What You Will Learn:
// How to create a simple TypeScript program.
// How to define and log variables of different types.
// Instructions
// Create a TypeScript program that logs the message “Hello, World!” to the console.
console.log("Hello, World!");
// Exercise 2: Type Annotations
// What You Will Learn:
// How to use type annotations in TypeScript.
// How to define and log variables with specified types.
// Instructions
// Define a variable age of type number and a variable name of type string, and log them to the console.
let age = 42;
let name1 = "Marc";
console.log(age, name1);
// Exercise 3: Union Types
// What You Will Learn:
// How to use union types in TypeScript.
// How to define variables that can hold either a string or a number.
// Description: Use union types to declare a variable that can hold either a string or a number.
// Instructions
// Use union types to declare a variable id that can be either a string or a number.
let id;
// Exercise 4: Control Flow with if...else
// What You Will Learn:
// How to use if...else statements to control program flow.
// How to handle different conditions using if...else statements.
// Instructions
// Write a function that takes a number as input and returns a string indicating whether the number is positive, negative, or zero.
// Use if...else statements to control the flow of a program.
function sign(num) {
    let result;
    if (num < 0)
        result = "negative number";
    else if (num === 0)
        result = "zero";
    else
        result = "positive number";
    return result;
}
console.log(sign(-12));
// Exercise 5: Tuple Types
// What You Will Learn:
// How to use tuple types in TypeScript.
// How to define functions that return multiple values of different types.
// Instructions
// Create a function getDetails that takes a name and age as input and returns a tuple containing the input values and a greeting message.
// The tuple should contain multiple values of different types
function getDetails(name, age) {
    return [name, age, `Hello, ${name} ! You are ${age} old.`];
}
// Call the function and log the tuple
const details = getDetails("Alice", 25);
// Expected output
console.log(details);
function createPerson(nm, ag) {
    const person = {
        name: nm,
        age: ag
    };
    console.log(person);
    return person;
}
;
createPerson("Marc", 42);
//Exercise 7: Type Assertions
// What You Will Learn:
// How to use type assertions in TypeScript to cast an element to a specific type.
// How to access and manipulate properties of an HTML element after casting.
// Description:
// In this exercise, you’ll learn how to use type assertions to cast an HTML element to a specific type in TypeScript. This allows you to safely access and manipulate properties of the element.
// Instructions
// Get an Element from the DOM:
// Use document.getElementById() to retrieve an HTML element from the DOM.
// Use Type Assertion:
// Apply a type assertion to cast the element to a specific HTML element type, such as HTMLInputElement.
// Access the Element’s Properties:
// Once cast, use the properties of the specific element type, like setting the value of an input element.
// Test the Functionality:
// Ensure that you can successfully set or manipulate a property of the element.
// Additional Notes:
// Type assertions are a powerful way to let TypeScript know more about the type of an element when you’re certain of it. However, you should use them cautiously, as incorrect assertions can lead to runtime errors if the type is not as expected.
let inputElement = document.getElementById("hello");
inputElement.value = "Hello, World!";
// Exercise 8: switch Statement with Complex Conditions
// What You Will Learn:
// How to use a switch statement in TypeScript.
// How to handle multiple conditions using complex cases in a switch statement.
// Instructions
// Create a function getAction that takes a string representing a user role and returns an action for the user. Use a switch statement with complex conditions to handle multiple roles.
// // Test the function with different roles
// console.log(getAction("admin")); // Output: Manage users and settings
// console.log(getAction("editor")); // Output: Edit content
// console.log(getAction("viewer")); // Output: View content
// console.log(getAction("guest")); // Output: Limited access
// console.log(getAction("unknown")); // Output: Invalid role
function getAction(role) {
    let action;
    switch (role) {
        case "admin":
            action = "Manage users and settings";
            break;
        case "editor":
            action = "Edit content";
            break;
        case "viewer":
            action = "View content";
            break;
        case "guest":
            action = "Limited access";
            break;
        default:
            action = "Invalid role";
            break;
    }
    return action;
}
console.log(getAction("admin")); // Output: Manage users and settings
console.log(getAction("editor")); // Output: Edit content
console.log(getAction("viewer")); // Output: View content
console.log(getAction("guest")); // Output: Limited access
console.log(getAction("unknown")); // Output: Invalid role
function greet(name) {
    if (name) {
        return `Hello, ${name}!`;
    }
    return "Hello, stranger!";
}
console.log(greet("Marc")); // Hello, Marc!
console.log(greet()); // Hello, stranger!
