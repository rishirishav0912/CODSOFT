let display = document.getElementById('display');
    let currentInput = '';
    let operator = '';

    function appendNumber(number) {
      currentInput += number;
      display.textContent = currentInput;
    }

    function appendOperator(op) {
      operator = op;
      currentInput += op;
      display.textContent = currentInput;
    }

    function calculate() {
      let result = eval(currentInput);
      display.textContent = result;
      currentInput = result.toString();
    }

    function clearDisplay() {
      currentInput = '';
      operator = '';
      display.textContent = '0';
    }