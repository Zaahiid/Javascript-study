function sayMyName() {
  console.log("Z");
  console.log("A");
  console.log("H");
  console.log("I");
  console.log("D");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// number1 and number2 are parameters
// 1 and 3 are arguments

// addTwoNumbers(1, 3);

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  return number1 + number2;
}

// const result = addTwoNumbers(1, 3);
// console.log("Result: ",result);

// function loginUserMessage(username) {

//   return `${username} has just logged in.`;
// }

// console.log(loginUserMessage("Zahid"));

// function loginUserMessage(username) {
//   if (username === undefined) {
//     console.log("Please Enter Useraname");
//     return;
//   }

//   return `${username} has just logged in.`;
// }

// console.log(loginUserMessage());

function loginUserMessage(username = "Slave") {
  if (!username) {
    console.log("Please Enter Useraname");
    return;
  }

  return `${username} has just logged in.`;
}

//   console.log(loginUserMessage());
