// Officially there are two data types in Javascript categorized based upon how one can access that from memory

//A. Primitive Data Types

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const userName = "Zahid";
const score = 100;
const isLoggedIn = true;
const temperature = null;

let userEmail; // undefined

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId); //false
// the Symbol data type is used to create unique and immutable values.

const bigNumber = 3264564661646164n;
// console.log(typeof bigNumber); //bigint


// B. Reference Data Types (Non primitive)

// Arrays, Objects, Functions

const heros = ["Iron Man", "Thor", "Spiderman"];

let myObj ={
    name: "Zahid",
    score: 100,
}

const myFunc = function(){
    console.log("Hello World")
}

// ////////////////////////////////////////////////////////////////////////

// Stack (Primitive data) and Heap (Reference data)

// The stack and heap are two different memory spaces used for storing data.

let myName = "Zahid Sheikh";

let anotherName = myName;

anotherName = "Zahid Rashid Sheikh";

console.log(myName)
console.log(anotherName);

let userOne ={
    email:"user@zmail.com",
    upi: "user@zbl"
}

let userTwo = userOne;

userTwo.email = "user2@kmail.com";
console.log(userOne.email);
console.log(userTwo.email);