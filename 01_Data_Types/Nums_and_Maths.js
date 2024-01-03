const score = 400;

const balance = new Number(100);

console.log(score);
console.log(balance); 

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum = 1123.899;

console.log(otherNum.toPrecision(3))

const hundreds = 1000000;

console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));