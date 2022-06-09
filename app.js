const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, a, b) {
    console.log(a, b, operator);
    switch (operator) {
        case '+':
            return add(a, b)
            break;
        case '-':
            return subtract(a, b)
            break;
        case '*':
            return multiply(a, b)
            break;
        case '/':
            return divide(a, b)
            break;
    }
};

const mainDisplay = document.querySelector('#main-display');
const secondaryDisplay = document.querySelector('#secondary-display');
let operators = [];
let tempValue = '';
let result = 0;

function clearBtn(e) {
    operators = []
    tempValue = '';
    result = '';
    mainDisplay.textContent = tempValue;
    secondaryDisplay.textContent  = tempValue;
};

function plusMinusBtn(e) {
    if (tempValue == 0) return;
    tempValue *= -1;
    mainDisplay.textContent = tempValue;
};

const buttons = document.querySelector('#buttons-container');
buttons.addEventListener('click', function(e) {
    const button = e.target;
    if (e.target.className === 'number btn') {
        tempValue += button.dataset.value;
        mainDisplay.textContent = tempValue;
    }
    if (e.target.className === 'operand btn') return operandBtn(e)
    if(e.target.className === 'clear btn') return clearBtn(e);
    if(e.target.className === 'equal btn') return equalBtn(e);
    if(e.target.className === 'plus-minus btn') return plusMinusBtn(e);
    if(e.target.className === 'backspace btn') return backspaceBtn(e);
    
});

function equalBtn(e) {
    secondaryDisplay.textContent += ' ' + tempValue;
    operators[2] = tempValue;
    let valueA = parseFloat(operators[0]);
    let valueB = parseFloat(operators[2]);
    if (valueB === 0 && operators[1] == '/') return mainDisplay.textContent = "That doesn't work";
    result = operate(operators[1], valueA, valueB);  
    mainDisplay.textContent = Math.round(( result + Number.EPSILON) * 100) / 100;
    operators = [];
    tempValue = ''; 
    console.log(operators);
};

function operandBtn(e) {
    const button = e.target;
    if (tempValue == '') return;
    if (operators.length == 0) {
        operators[0] = tempValue;
        operators[1] = button.dataset.value;
        secondaryDisplay.textContent += ' ' + tempValue + ' ' + button.dataset.value;
    } else {
        let valueA = parseFloat(operators[0]);
        let valueB = parseFloat(tempValue);
        if (valueB === 0 && operand == '/') return mainDisplay.textContent = "That doesn't work";
        result = operate(operators[1], valueA, valueB);
        operators = [];
        operators[0] = result;
        operators[1] = button.dataset.value;
        secondaryDisplay.textContent = Math.round(( result + Number.EPSILON) * 100) / 100 + ' ' + operators[1];   
    }
    mainDisplay.textContent = '';
    tempValue = '';
};

function backspaceBtn(e) {
    tempValue = tempValue.slice(0, -1);
    mainDisplay.textContent = tempValue;
};