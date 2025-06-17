let operand1 = "";
let operator = "";
let operand2 = "";

function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

function subtract(num1, num2){
    const difference = num1 - num2;
    return difference;
}

function multiply(num1, num2){
    const product = num1 * num2;
    return product;
}

function divide(num1, num2){
    const quotient = num1 / num2;
    return quotient; 
}

function operate(){
    const parsedOperand1 = parseInt(operand1);
    const parsedOperand2 = parseInt(operand2);
    let result;
    if(operator == "addition"){
        result = add(parsedOperand1, parsedOperand2);
    }
    else if(operator == "subtraction"){
        result = subtract(parsedOperand1, parsedOperand2);
    }
    else if(operator == "multiplication"){
        result = multiply(parsedOperand1, parsedOperand2);
    }
    else if(operator == "division"){
        result = divide(parsedOperand1, parsedOperand2);
    }
    return result;
}

const inputDisplay = document.querySelector('.calc-display-input');
const resultDisplay = document.querySelector('.calc-display-result');
const clearBtn = document.querySelector('#clear-btn');
const deleteBtn = document.querySelector('#delete-btn');
const numericBtns = document.querySelectorAll('.numeric-btns');
const fullstopBtn = document.querySelector('#fullstop-btn');
const addBtn = document.querySelector('#plus-btn');
const subtractBtn = document.querySelector('#minus-btn');
const multiplyBtn = document.querySelector('#multiply-btn');
const divideBtn = document.querySelector('#divide-btn');
const equalsBtn = document.querySelector('#equals-btn');

numericBtns.forEach((numericBtn) => {
    numericBtn.addEventListener('click', (event) => {
        if(operator == ""){
            operand1 += event.target.textContent.trim();
            resultDisplay.textContent = operand1;
        }
        else{
            operand2 += event.target.textContent.trim();
            resultDisplay.textContent = operand2;
        }
    });
});

addBtn.addEventListener('click', () => {
    operator = "addition";
    if(operand1 != ""){
        inputDisplay.textContent = operand1 + " + ";
    }
});
subtractBtn.addEventListener('click', () => {
    operator = "subtraction";
    if(operand1 != ""){
        inputDisplay.textContent = operand1;
        inputDisplay.innerHTML += " &minus; ";
    }
});
multiplyBtn.addEventListener('click', () => {
    operator = "multiplication";
    if(operand1 != ""){
        inputDisplay.textContent = operand1;
        inputDisplay.innerHTML += " &times; ";
    }
});
divideBtn.addEventListener('click', () => {
    operator = "division";
    if(operand1 != ""){
        inputDisplay.textContent = operand1;
        inputDisplay.innerHTML += " &divide; ";
    }
});

equalsBtn.addEventListener('click', () => {
    if(operand2 != ""){
        inputDisplay.textContent += operand2;
    }
    const result = operate();
    resultDisplay.textContent = result;
});