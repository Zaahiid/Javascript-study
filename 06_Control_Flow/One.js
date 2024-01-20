const temperature = 60;

if (temperature < 50) {
  console.log("Temperature is less than 50deg");
} else {
  console.log("Temperature is greater than 50deg");
}

// Comparison operators
// <, >, <=, >=, ==, !=, ===, !==

// const balance = 1000;
// if (balance > 500) console.log("Balance is greater than 500");
// Implicit Scope


// Multiple if statements
// const balance = 40;

if (balance < 500) {
  console.log("Balance is less than 500");
} else if (balance < 750) {
  console.log("Balance is less than  750");
} else if (balance < 900) {
  console.log("Balance is less than 900");
} else {
  console.log(" Balance is grater than 900");
}

// Checking Multiple Conditions

const userLoggedIn = true;
const hasDebitCard = true;

if (userLoggedIn && hasDebitCard){
    console.log("Can buy the product")
}

const userLoggedInEmail = true;
const userLoggedInGoogle = true;
if (userLoggedInEmail ||  userLoggedInGoogle
){
    console.log("Can enter the portal")
}