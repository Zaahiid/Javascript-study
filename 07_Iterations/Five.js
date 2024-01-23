// for...each loop

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val) {
  console.log(val.toUpperCase());
});

// with arrow function

coding.forEach((item) => {
  console.log(item);
});

// with separate function

function printMe(item) {
  console.log(item);
}

coding.forEach(printMe);

// other parameters available with for...each loop

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
