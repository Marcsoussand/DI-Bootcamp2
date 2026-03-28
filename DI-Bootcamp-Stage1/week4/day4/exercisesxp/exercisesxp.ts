// Exercise 1: Class with Access Modifiers
// What You Will Learn:

// How to use access modifiers (private, protected, and public) in a class.
// How to create methods that interact with private and protected properties.
// Create a class Employee with the following properties:

// A private property name of type string.
// A private property salary of type number.
// A public property position of type string.
// A protected property department of type string.
// Also, include a constructor to initialize these properties. Create a public method getEmployeeInfo that returns the employee’s name and position.

class Employee {
    private name: string;
    private salary: number;
    public position: string;
    protected department: string;

    constructor(name: string, salary: number, position: string, department: string) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    public getEmployeeInfo(): string {
        return `Name: ${this.name}, Position: ${this.position}`;
    }
}

//Exercise 2: Readonly Properties in a Class
// What You Will Learn:

// How to use the readonly modifier to make class properties immutable.
// How to prevent modifications to class properties after initialization.


// Instructions:
// Create a class Product with the following properties:

// A readonly property id of type number.
// A public property name of type string.
// A public property price of type number.
// Create a method getProductInfo that returns a string with the product’s name and price. Attempt to modify the id property after creating a new instance of the class and observe the result.

class Product {
    readonly id: number;
    public name: string;
    public price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public getProductInfo(): string {
        return `Name: ${this.name}, Price: ${this.price}`;
    }
}

const product = new Product(1, "Laptop", 999.99);
console.log(product.getProductInfo());

// Attempt to modify the readonly property
// product.id = 2; // This will cause a compilation error

// Exercise 3: Class Inheritance
// What You Will Learn:

// How to create a base class and extend it using inheritance.
// How to reuse properties and methods from the base class.


// Instructions:
// Create a base class Animal with a public property name and a method makeSound that returns a string.
//  Create a subclass Dog that extends Animal and overrides the makeSound method to return the sound 
// a dog makes (“bark”). Create an instance of the Dog class and call the makeSound method.

class Animal {
    public name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    makeSound(): string {
        return `Wouf`;
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound(): string {
        return `Bark`;
    }
}

const dog = new Dog("Buddy");
console.log(dog.makeSound());

// Exercise 4: Static Properties and Methods
// What You Will Learn:

// How to use static properties and methods in a class.
// How to access static members without creating an instance of the class.


// Instructions:
// Create a class Calculator with the following static methods:

// add(a: number, b: number): number – returns the sum of two numbers.
// subtract(a: number, b: number): number – returns the difference between two numbers.
// Call these methods without creating an instance of the class.

class Calculator {
    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }
}

console.log(Calculator.add(5, 3)); // Output: 8
console.log(Calculator.subtract(5, 3)); // Output: 2

// Exercise 5: Extending Interfaces with Optional and Readonly Properties
// What You Will Learn:

// How to extend an interface to add new properties.
// How to use optional and readonly properties in interfaces.


// Instructions:
// Create an interface User with properties id (readonly), name, and email. 
// Extend the User interface to create a PremiumUser interface with an additional
//  optional property membershipLevel.
//  Create a function printUserDetails that accepts a PremiumUser and logs the details to the console.

interface User {
    readonly id: number;
    name: string;
    email: string;
}   

interface PremiumUser extends User {
    membershipLevel?: string;
}   

function printUserDetails(user: PremiumUser): void {
    console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Membership Level: ${user.membershipLevel ?? "N/A"}`);
}

const premiumUser: PremiumUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    membershipLevel: "Gold"
};  

printUserDetails(premiumUser);