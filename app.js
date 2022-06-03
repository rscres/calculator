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
let displayValues = '';

function equalBtn(e) {
    if (displayValues == '') return;
    let operators = displayValues.split(' ');
    let valueA = parseFloat(operators[0]);
    let valueB = parseFloat(operators[2]);
    if (operators[0] === null || valueA === null || valueB === NaN) return;
    secondaryDisplay.textContent = displayValues;
    displayValues = operate(operators[1], valueA, valueB);
    mainDisplay.textContent = displayValues;
};

function clearBtn(e) {
    if (e.target.dataset.value === 'AC') {
        operators = [];
        displayValues = '';
        mainDisplay.textContent = displayValues;
        secondaryDisplay.textContent  = displayValues;
    } else if (e.target.dataset.value === 'C') {
        displayValues = ''
        mainDisplay.textContent = displayValues;
    }
}

const buttons = document.querySelector('#buttons-container');
buttons.addEventListener('click', function(e) {
    const button = e.target;
    if (e.target.className === 'number btn') {
        displayValues += button.dataset.value;
        mainDisplay.textContent = displayValues;
    }
    if (e.target.className === 'operand btn') {
        if (displayValues == '') return;
        displayValues += button.dataset.value;
        mainDisplay.textContent = displayValues;
    }
    if(e.target.className === 'clear btn') return clearBtn(e);
    if(e.target.className === 'equal btn') return equalBtn(e);
    
});

