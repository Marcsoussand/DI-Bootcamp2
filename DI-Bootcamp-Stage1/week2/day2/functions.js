const favorite_food = 'sushi'

function greetUser(greeting, username = "user"){
    if (greeting) {
    console.log(`${greeting}, ${username}!`);
    } else {
        console.log(`Go away, ${username}`)
    }
    console.log(`My favorite food is ${favorite_food}`);
    const favorite_drink = 'Coke';
    console.log(`My favorite drink is ${favorite_drink}`);
    
}

greetUser("Greetings","fred");
greetUser("Ahoy");
greetUser();

console.log(`My favorite food is ${favorite_food}`);
console.log(`My favorite drink is ${favorite_drink}`);