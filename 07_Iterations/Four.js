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
