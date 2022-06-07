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
let values = '';
let tempValue = '';
let result = 0;
let operations = [];

function equalBtn(e) {
    secondaryDisplay.textContent += ' ' + tempValue;
    operators[i] = tempValue;
    console.log(operators);
    tempValue = '';
    for (j = 0; j < i - 1; j += 2) {
        let valueA = parseFloat(operators[j]);
        let valueB = parseFloat(operators[j + 2]);
        console.log(valueA, valueB);
        if (valueB === 0 && operators[1] == '/') return mainDisplay.textContent = "That doesn't work";
        console.log(operate(operators[j + 1], valueA, valueB));
        result = operate(operators[j + 1], valueA, valueB);  
        operators[j + 2] = result;
    };
    console.log(result);
    mainDisplay.textContent = Math.round(( result + Number.EPSILON) * 100) / 100;
    console.log(mainDisplay.textContent);
};

/* for (j = 0; j <= i; j = j + 2) {
    let valueA = parseFloat(operators[j]);
    let valueB = parseFloat(operators[j + 1]);
    if (valueB === 0 && operators[1] == '/') return mainDisplay.textContent = "That doesn't work";
    result += operate(operators[1], valueA, valueB);    
} */

function clearBtn(e) {
    if (e.target.dataset.value === 'AC') {
        operators = operators.splice(0, operators.length);
        tempValue = '';
        result = '';
        mainDisplay.textContent = tempValue;
        secondaryDisplay.textContent  = tempValue;
    } else if (e.target.dataset.value === 'C') {
        tempValue = '';
        mainDisplay.textContent = tempValue;
    }
}

function plusMinusBtn(e) {
    if (tempValue == 0) return;
    tempValue = tempValue * -1;
    mainDisplay.textContent = tempValue;
}

let i = 0;

const buttons = document.querySelector('#buttons-container');
buttons.addEventListener('click', function(e) {
    const button = e.target;
    if (e.target.className === 'number btn') {
        tempValue += button.dataset.value;
        mainDisplay.textContent = tempValue;
    }
    if (e.target.className === 'operand btn') {
        if (tempValue == '') return;
        operators[i] = tempValue;
        operators[i + 1] = button.dataset.value;
        console.log(operators);
        secondaryDisplay.textContent += ' ' + tempValue + ' ' + button.dataset.value;
        mainDisplay.textContent = '';
        tempValue = '';
        i = i + 2;
    }
    if(e.target.className === 'clear btn') return clearBtn(e);
    if(e.target.className === 'equal btn') return equalBtn(e);
    if(e.target.className === 'plus-minus btn') return plusMinusBtn(e);
    
});

/* const buttons = document.querySelector('#buttons-container');
buttons.addEventListener('click', function(e) {
    const button = e.target;
    if (e.target.className === 'number btn') {
        displayValues += button.dataset.value;
        console.log(displayValues);
        mainDisplay.textContent = displayValues;
    }
    if (e.target.className === 'operand btn') {
        if (displayValues == '') return;
        displayValues += button.dataset.value;
        console.log(displayValues);
        secondaryDisplay.textContent = displayValues;
    }
    if(e.target.className === 'clear btn') return clearBtn(e);
    if(e.target.className === 'equal btn') return equalBtn(e);
    
}); */