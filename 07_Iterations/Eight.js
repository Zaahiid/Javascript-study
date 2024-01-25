// reduce loop

const myNumbers = [1, 2, 3];

const newNums = myNumbers.reduce(function (accumulator, currentValue) {
  console.log(`acc : ${accumulator} and curVal : ${currentValue}`);
  return accumulator + currentValue;
}, 0);

console.log(newNums);

const myTotal = myNumbers.reduce((acc,cur)=> acc + cur,0);
console.log(myTotal)