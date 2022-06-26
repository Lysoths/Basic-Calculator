const numbers = document.querySelectorAll(".numbers > button");
const input = document.getElementById("numberinput");
const process = document.querySelectorAll(".process > button");
const results = document.getElementById("results");
let number1 = [];
let result = 0;
numbers.forEach((a, b) => {
  a.addEventListener("click", (e) => {
    input.value += b + 1;
  });
});

process.forEach((a, b) => {
  a.addEventListener("click", (e) => {
    if (a.innerHTML === "+" && input.value !== "") {
      number1.push(`${[input.value]}`);
      result = result + parseInt(number1[0]);
      input.value = "";
      console.log(result);
      number1.pop();
      results.value = result;
    }
  });
});
