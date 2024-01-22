// for of loop

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greetings = "Hello World";

for (greet of greetings) {
  if (greet == " ") {
    console.log(`detected space char`);
    continue;
  }
  console.log(`The char is ${greet}`);
}
