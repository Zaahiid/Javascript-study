const myObject = {
  js: "Javascript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift by Apple",
};

for (const key in myObject) {
  console.log(`${key} is abbreviation for ${myObject[key]}`);
}

// for...in with Array

const programming = ["JS", "RB", "PY", "JAVA"];

for (const key in programming) {
  console.log(key);
}

for (const key in programming) {
  console.log(programming[key]);
}

// for...in loop with Map

const map = new Map();
map.set("IN", "India");
map.set("SA", "Saudi Arabia");
map.set("EN", "England");
map.set("IN", "India");

for (const key in map) {
  console.log(key);
}

// Program did not output anything!
