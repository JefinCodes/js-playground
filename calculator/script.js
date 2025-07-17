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
    const parsedOperand1 = parseFloat(operand1);
    const parsedOperand2 = parseFloat(operand2);
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

clearBtn.addEventListener('click', () => {
    operand1 = "";
    operator = "";
    operand2 = "";
    inputDisplay.textContent = "";
    resultDisplay.textContent = "";
});

deleteBtn.addEventListener('click', () => {
    if(operator == ""){
        if(operand1 != ""){
            operand1 = operand1.slice(0, -1);
            resultDisplay.textContent = operand1;
        }
    }
    else{
        if(operand2 != ""){
            operand2 = operand2.slice(0, -1);
            resultDisplay.textContent = operand2;
        }
    }
});

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

fullstopBtn.addEventListener('click', (event) => {
    if(operator == ""){
        if(!(operand1.includes("."))){
            operand1 += event.target.textContent.trim();
            resultDisplay.textContent = operand1;
        }
    }
    else{
        if(!(operand2.includes("."))){
            operand2 += event.target.textContent.trim();
            resultDisplay.textContent = operand2;
        }
    }
});

function handleChainedOperation(){
    const result = operate();
    operand1 = String(result);
    operator = "";
    operand2 = "";
}

addBtn.addEventListener('click', () => {
    if(operand2 != ""){
        handleChainedOperation();
    }
    operator = "addition";
    if(operand1 != ""){
        inputDisplay.textContent = operand1 + " + ";
        resultDisplay.textContent = "";
    }
});
subtractBtn.addEventListener('click', () => {
    if(operand2 != ""){
        handleChainedOperation();
    }
    operator = "subtraction";
    if(operand1 != ""){
        inputDisplay.textContent = operand1;
        inputDisplay.innerHTML += " &minus; ";
        resultDisplay.textContent = "";
    }
});
multiplyBtn.addEventListener('click', () => {
    if(operand2 != ""){
        handleChainedOperation();
    }
    operator = "multiplication";
    if(operand1 != ""){
        inputDisplay.textContent = operand1;
        inputDisplay.innerHTML += " &times; ";
        resultDisplay.textContent = "";
    }
});
divideBtn.addEventListener('click', () => {
    if(operand2 != ""){
        handleChainedOperation();
    }
    operator = "division";
    if(operand1 != ""){
        inputDisplay.textContent = operand1;
        inputDisplay.innerHTML += " &divide; ";
        resultDisplay.textContent = "";
    }
});

equalsBtn.addEventListener('click', () => {
    if(operand1 != "" && operand2 != ""){
        inputDisplay.textContent += operand2;
        const result = operate();
        resultDisplay.textContent = result;
        operand1 = String(result);
        operator = "";
        operand2 = "";
    }
});