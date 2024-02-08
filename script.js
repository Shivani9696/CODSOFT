let displayValue = '0';
let isNewCalculation = false;

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function appendToDisplay(value) {
  if (isNewCalculation || displayValue === '0') {
    displayValue = value;
    isNewCalculation = false; 
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  isNewCalculation = false; 
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
    isNewCalculation = true; 
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    isNewCalculation = false; 
    updateDisplay();
  }
}

function deleteLast() {
  if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1); 
  } else {
    displayValue = '0'; 
  }
  updateDisplay();
}

