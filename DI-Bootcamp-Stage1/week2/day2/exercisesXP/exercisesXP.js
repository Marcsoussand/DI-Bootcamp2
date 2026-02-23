//Exercise 1 

const displayNumbersDivisible = () => {
    let sum = 0;
    for (let i = 0;i <= 500 ; i++) {
        if (i%23 === 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log(`Sum: ${sum}`)
}

displayNumbersDivisible();

//Bonus
const displayNumbersDivisibleBonus = (divisor) => {
    let sum = 0;
    console.log(`All the numbers divisible by ${divisor}`);
    for (let i = 0;i <= 500 ; i++) {
        if (i%divisor === 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log(`Sum: ${sum}`)
}

displayNumbersDivisibleBonus(49);

//Exercise 2: Shopping List
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ['banana', 'orange', 'apple']

const myBill = () => {
    let price = 0;
    for (item of shoppingList) {        
        if (stock[item] > 0) {
            price += prices[item]
            //Bonus question:
            stock[item]--
        }
    }
    console.log();
    return price
}

console.log(`Total price of your shopping list is: ${myBill()}`)

//Exercise3: What's in my wallet

const changeEnough = (itemPrice, amountOfChange) => {
    change = amountOfChange[0] * 0.25 
    + amountOfChange[1] * 0.1 
    + amountOfChange[2] * 0.05 
    + amountOfChange[3] * 0.01;
    if (itemPrice <= change) {return true}
    return false
}

console.log(changeEnough(4.25, [25, 20, 5, 0]))
console.log(changeEnough(14.11, [2,100,0,0]));
console.log(changeEnough(0.75, [0,0,20,5]));


