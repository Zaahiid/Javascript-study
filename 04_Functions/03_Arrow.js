const user = {
  username: "Zahid",
  score: 200,
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome!`);
    console.log(this);
  },
};
// user.welcomeMessage();
// user.username = "Sajid";
// user.welcomeMessage();
// console.log(this)

// function coffee() {
//   let username = "Strong Coffee";
//   console.log(this.username);
// }
// coffee();

// const coffee = function () {
//   let username = "Strong Coffee";
//   console.log(this.username);
// };
// coffee();

const coffeeArrow = () => {
  // let username = "Strong Coffee";
  console.log(this.username);
};
// coffeeArrow()

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(3, 4));

// Implicit return example
// const addTwo = (num1, num2)=>num1 + num2;
// const addTwo = (num1, num2)=>(num1 + num2);
// console.log(addTwo(3,4))



// const addTwo = (num1, num2)=>({username:"Zahid"});
// console.log(addTwo(3,4))