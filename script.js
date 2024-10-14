let currentInput = '';
let display = document.getElementById('display');

// Append digit or decimal to the display
function appendDigit(digit) {
  if (currentInput === '0' && digit !== '.') {
    currentInput = digit;
  } else {
    currentInput += digit;
  }
  display.innerText = currentInput;
}

// Clear the display
function clearDisplay() {
  currentInput = '';
  display.innerText = '0';
}

// Add an operator to the current input
function calculate(operator) {
  if (currentInput !== '') {
    currentInput += operator;
    display.innerText = currentInput;
  }
}

// Perform square of the current number
function square() {
  if (currentInput !== '') {
    currentInput = (parseFloat(currentInput) ** 2).toString();
    display.innerText = currentInput;
  }
}

// Perform the calculation
function equals() {
  try {
    currentInput = eval(currentInput).toString(); // Evaluate the expression
    display.innerText = currentInput;
  } catch (error) {
    display.innerText = 'Error';
  }
}
