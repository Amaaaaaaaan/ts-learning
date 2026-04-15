//sum function

// function sum (a : number,b:number) {
//     console.log(a+b);
// }
// sum(5, 3);


// working of interface and function with return type 
// explanation - we have created an interface called User which has three properties: name,
//  age, and isAdmin. Then we have a function called createUser that takes three parameters 
// (name, age, and isAdmin) and returns an object that conforms to the User interface. Finally, 
// we create a user object using the createUser function and log it to the console.

// interface - a way to define the structure of an object. 
// It allows us to specify the properties and their types 
// that an object should have. In this example, the User interface defines that a 
// user object should have a name (string), age (number), and isAdmin (boolean).

// interface User {
//     name: string;
//     age: number;
//     isAdmin: boolean;
// }

// function createUser(name: string, age: number, isAdmin: boolean): User {
//     return {
//         name,
//         age,
//         isAdmin
//     };
// }

// const user1 = createUser("Alice", 30, true);
// console.log(user1);



interface user {
    name: string;
    age: number;
    address?: {   // ✅ IMPORTANT
        city: string;
        state: string;
        pincode: number;
    };
    islegal(): string;
}

class Manager implements user {
    name: string;
    age: number;
    address?: {
        city: string;
        state: string;
        pincode: number;
    };

    constructor(
        name: string,
        age: number,
        address?: user["address"]
    ) {
        this.name = name;
        this.age = age;
        if (address) {
            this.address = address;
        }
    }

    islegal(): string {
        return this.age >= 18 ? "legal" : "not legal";
    }
}

const manager1 = new Manager("John", 25, { city: "New York", state: "NY", pincode: 10001 });
const manager2 = new Manager("Jane", 17);

console.log(manager1);
console.log(manager1.islegal());
console.log(manager2);
console.log(manager2.islegal());