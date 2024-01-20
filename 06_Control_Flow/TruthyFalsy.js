const userEmail = [];
if (userEmail) {
    console.log("Got an email")
} else {
    console.log("Don't have an email")
}

// Falsy values

// false, 0 , -0 , BigInt 0n , "" , null , undefined , NaN
// Everything else is truthy value

// Truthy values
// "0", 'false' , " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty")
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0){
    console.log("Object is Empty")
}