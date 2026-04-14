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


// small assignment to understand the concept of interface and function with return type


interface user{
    name : string;
    age : number;
    address :{
        city : string;
        state : string;
        pincode : number;
    }
}

let user : user = {
    name : "John Doe",
    age : 14,
    address : {
        city : "New York",
        state : "NY",
        pincode : 10001
    }
}

function islegal(user: user) : boolean {
    if(user.age >= 18){
        return true;
    } else {
        return false;
    }
}
console.log(islegal(user));