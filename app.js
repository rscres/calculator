//Operation functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, a, b) {
    if (b === 0 && operator == '/') {
        mainDisplay.style.fontSize = "220%";
        mainDisplay.textContent = "That doesn't work";
        return;
    };
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
    };
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
    if (mainDisplay.style.fontSize !== "350%") mainDisplay.style.fontSize = '350%';
    const button = e.target;
    if (e.target.className === 'number btn') {
        if (e.target.dataset.value === '.' && tempValue.includes('.') === true) return;
        tempValue += button.dataset.value;
        mainDisplay.textContent = tempValue;
    }
    if (e.target.className === 'operand btn') return operandBtn(e)
    if (e.target.className === 'clear btn') return clearBtn(e);
    if (e.target.className === 'equal btn') return equalBtn(e);
    if (e.target.className === 'plus-minus btn') return plusMinusBtn(e);
    if (e.target.className === 'backspace btn') return backspaceBtn(e);
    
});

//Equal button function
function equalBtn(e) {
    if (tempValue == '') return;
    secondaryDisplay.textContent += ' ' + tempValue;
    operators[2] = tempValue;
    let valueA = parseFloat(operators[0]);
    let valueB = parseFloat(operators[2]);
    result = operate(operators[1], valueA, valueB);  
    mainDisplay.textContent = Math.round(( result + Number.EPSILON) * 100) / 100;
    operators = [];
    tempValue = ''; 
};

//Operand buttons function
function operandBtn(e) {
    const button = e.target;
    if (tempValue == '') return;
    if (operators.length == 0) {
        operators[0] = tempValue;
        operators[1] = button.dataset.value;
        secondaryDisplay.textContent = tempValue + ' ' + button.dataset.value;
    } else {
        let valueA = parseFloat(operators[0]);
        let valueB = parseFloat(tempValue);
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
