let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () =>{
    groceries.fruits.forEach((fruit) => console.log(fruit));
}
displayGroceries();

const cloneGroceries = () => {
    let user = client;
    client = "Betty"; // User is assigned with the client variable, so if client change, user changes as well
    let shopping = groceries;
    groceries.totalPrice = '35$';
    groceries.other.paid = false; //Shopping is groceries
    console.log(groceries);
    console.log(shopping);
    
    
}

cloneGroceries();
