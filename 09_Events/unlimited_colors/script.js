let intervalId;

function generateRandomColor() {
  const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = newColor;
  console.log(newColor);
}

// Following is the simple way to generate random color
function randomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
}
const simpleColor = randomColor();

function startColorGeneration() {
  if (!intervalId) {
    intervalId = setInterval(generateRandomColor, 1000);
    console.log("Start Clicked");
  }
}

function stopColorGeneration() {
  clearInterval(intervalId);
  intervalId = null;
  console.log("Stop Clicked");
}

document
  .querySelector("#start")
  .addEventListener("click", startColorGeneration);
document.querySelector("#stop").addEventListener("click", stopColorGeneration);

console.log(Math.floor(Math.random() * 16777215).toString(16));
