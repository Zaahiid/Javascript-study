// reduce loop

const myNumbers = [1, 2, 3];

const newNums = myNumbers.reduce(function (accumualtor, currentValue) {
  console.log(`acc : ${accumualtor} and curVal : ${currentValue}`);
  return accumualtor + currentValue;
}, 0);

console.log(newNums);
