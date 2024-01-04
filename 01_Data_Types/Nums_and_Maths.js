const score = 400;

const balance = new Number(100);

// console.log(score);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNum = 1123.899;

// console.log(otherNum.toPrecision(3))

const hundreds = 1000000;

// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++++++++++++++{Math}++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(2.5));
// console.log(Math.ceil(2.5));
// console.log(Math.floor(2.5));
// console.log(Math.max(1,2,3,4,5));
// console.log(Math.min(1,2,3,4,5));

// Math.random() = random values between 0 to 1

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
