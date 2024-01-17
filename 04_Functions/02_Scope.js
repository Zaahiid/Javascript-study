let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("INNER : ", a);
}

/* console.log(a) */
/* console.log(b) */
// console.log(c);
// console.log(a)

function one() {
  const username = "Zahid";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  console.log(website);
  two();
}
one();

if (true) {
  const username = "Zahid";
  if (username === "Zahid") {
    const website = " Youtube";
    console.log(username + website);
  }
  console.log(website);
}
console.log(username);

// ++++++++++++++++ Interesting +++++++++++++++++++++++++++ //

addOne(5);

function addOne(num) {
  return num + 1;
}


addTwo(5);
const addTwo = function (num) {
  return num + 2;
};
