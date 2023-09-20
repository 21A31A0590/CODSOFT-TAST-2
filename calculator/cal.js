const resultInput = document.getElementById("result");
const buttons = document.querySelectorAll(".buttons button");
let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    if (buttonText === "=") {
      try {
        currentInput = eval(currentInput);
        updateResult(currentInput);
      } catch (error) {
        updateResult("Error");
      }
    } else if (buttonText === "AC") {
      currentInput = "";
      updateResult(currentInput);
    } else if (buttonText === "") {
      currentInput = currentInput.slice(0, -1);
      updateResult(currentInput);
    } else if (buttonText === "√") {
      currentInput = Math.sqrt(parseFloat(currentInput));
      updateResult(currentInput);
    } else {
      currentInput += buttonText;
      updateResult(currentInput);
    }
  });
});

function updateResult(value) {
  resultInput.value = value;
}
