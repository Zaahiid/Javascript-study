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

function calculateCartPrice(num1) {
  return num1;
}

console.log(calculateCartPrice(20, 30, 40));

function calculateCartPrice2(...num) {
  return num;
}

console.log(calculateCartPrice2(20, 30, 40));

function calculateCartPrice3(val1, val2, ...num) {
  return num;
}

console.log(calculateCartPrice3(20, 30, 40, 50, 100, 2000));

const user = {
  username: "Zahid",
  score: 200,
};

function handleObject(anyObject) {
  console.log(
    `The name of user is ${anyObject.username} and score is ${anyObject.score}`
  );
}

handleObject(user);
handleObject({
  username: "King",
  score: "500",
});

const newArray = [100, 200, 300, 500, 1000];

function getSecondElement(getArray) {
  return getArray[1];
}
console.log(getSecondElement(newArray));
console.log(getSecondElement([111, 2222, 3333, 4444, 55555, 0000]));
