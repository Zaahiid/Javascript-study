// for loop

for (i = 0; i <= 10; i++) {
  const element = i;
  //   console.log(element);
}

for (i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best number");
  }
  //   console.log(element);
}

// loop inside loop

for (let i = 0; i <= 10; i++) {
  console.log(`Outer loop value ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
  }
}

for (let i = 1; i <= 10; i++) {
  console.log(`Outer loop value ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

const myArray = ["batman", "spiderman", "superman"];

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element);
}
