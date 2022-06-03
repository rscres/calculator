const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, a, b) {
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
        default:
            operator;
    }
};

const mainDisplay = document.querySelector('#main-display');

const buttons = document.querySelector('#buttons-container');
buttons.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        const button = e.target;
        console.log(button);
        mainDisplay.textContent += button.dataset.value;
    }
});