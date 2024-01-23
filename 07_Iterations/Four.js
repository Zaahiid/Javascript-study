const myObject = {
  js: "Javascript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift by Apple",
};

for (const key in myObject) {
  console.log(`${key} is abbreviation for ${myObject[key]}`);
}
