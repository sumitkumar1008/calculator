function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter both numbers!";
  } else {
    switch(operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          result = "Cannot divide by zero";
        } else {
          result = num1 / num2;
        }
        break;
      default:
        result = "Invalid operation";
    }
  }

  document.getElementById("result").innerText = "Result: " + result;
}
