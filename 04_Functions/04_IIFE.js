// Immediately Invoked Function Expression

(function chai() {
  console.log("DB Connected");
})();

// Named IIFE ☝

((name) => {
  console.log(`DB Connected two ${name}`);
})("Zahid");
