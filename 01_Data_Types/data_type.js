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