const name = "Zahid";
const score = 100;

// console.log(name + score)

// Modern Syntax

// console.log(`Hello, My name is ${name} and I scored ${score}`);

const gameName = new String("combat-ground");

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf("t"))

const newString = gameName.substring(0,4);
// console.log(newString)

const anotherString = gameName.slice(-2,5)
// console.log(anotherString)

const newStringOne ="     zahid    ";
// console.log(newStringOne);
// console.log(newStringOne.trim())

const url = "https://zahid.com/zahid%20sheikh";

console.log(url.replace("%20","-"));
console.log(url.includes("zahid"));
console.log(url.includes("wow"));

console.log(gameName.split("-"))
const firstWord = gameName.split("-")[0];
console.log(firstWord);