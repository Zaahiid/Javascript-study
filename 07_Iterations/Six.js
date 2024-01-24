// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values =coding.forEach(item => {
//     return item;
// });

// console.log(values);

// for...each returns undefined

// filter loop

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((nums) => nums > 4);

console.log(newNums);

// using for...each to return an array

const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums2 = [];

myNums2.forEach((nums) => {
  if (nums > 4) {
    newNums2.push(nums);
  }
});

console.log(newNums2);
