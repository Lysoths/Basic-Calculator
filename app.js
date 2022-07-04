const numbers = document.querySelectorAll(".numbers > button");
const input = document.getElementById("numberinput");
const input2 = document.getElementById("numberinput2");
const process = document.querySelectorAll(".process > button");
const h1 = document.querySelector("h1");

window.addEventListener("load", function () {
  var elements = document.getElementsByClassName("rainbowText");
  for (let i = 0; i < elements.length; i++) {
    generateRainbowText(elements[i]);
  }
});

function generateRainbowText(element) {
  var text = element.innerText;
  element.innerHTML = "";
  for (let i = 0; i < text.length; i++) {
    let charElem = document.createElement("span");
    charElem.style.color = "hsl(" + (360 * i) / text.length + ",80%,50%)";
    charElem.innerHTML = text[i];
    element.appendChild(charElem);
  }
}
let number1 = [];
let result = 0;
numbers.forEach((a, b) => {
  a.addEventListener("click", (e) => {
    input.value += b;
    if (b == 10) {
      input.value += ".";
    }
  });
});

process.forEach((a, b) => {
  a.addEventListener("click", (e) => {
    if (a.innerHTML == "+") {
      input.value += "+";
    } else if (a.innerHTML == "-") {
      input.value += "-";
    } else if (a.innerHTML == "*") {
      input.value += "*";
    } else if (a.innerHTML == "/") {
      input.value += "/";
    } else if (a.innerHTML == ".") {
      input.value += ".";
    } else if (a.innerHTML == "C") {
      input.value = "";
    } else if (a.innerHTML == "=" && input.value !== "") {
      result = input.value;
      input.value = eval(result);
    } else {
      alert("Please enter a number");
    }
  });
});
