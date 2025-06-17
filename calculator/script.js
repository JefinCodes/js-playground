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
const zeroBtn = document.querySelector('#zero-btn');
const oneBtn = document.querySelector('#one-btn');
const twoBtn = document.querySelector('#two-btn');
const threeBtn = document.querySelector('#three-btn');
const fourBtn = document.querySelector('#four-btn');
const fiveBtn = document.querySelector('#five-btn');
const sixBtn = document.querySelector('#six-btn');
const sevenBtn = document.querySelector('#seven-btn');
const eightBtn = document.querySelector('#eight-btn');
const nineBtn = document.querySelector('#nine-btn');
const fullstopBtn = document.querySelector('#fullstop-btn');
const addBtn = document.querySelector('#plus-btn');
const subtractBtn = document.querySelector('#minus-btn');
const multiplyBtn = document.querySelector('#multiply-btn');
const divideBtn = document.querySelector('#divide-btn');
const equalsBtn = document.querySelector('#equals-btn');

zeroBtn.addEventListener('click', (event) => {
    if(operator == ""){
        operand1 += event.target.textContent.trim();
    }
    else{
        operand2 += event.target.textContent.trim();
    }
});
oneBtn.addEventListener('click', (event) => {
    if(operator == ""){
        operand1 += event.target.textContent.trim();
    }
    else{
        operand2 += event.target.textContent.trim();
    }
});
twoBtn.addEventListener('click', (event) => {
    if(operator == ""){
        operand1 += event.target.textContent.trim();
    }
    else{
        operand2 += event.target.textContent.trim();
    }
});
threeBtn.addEventListener('click', (event) => {
    if(operator == ""){
        operand1 += event.target.textContent.trim();
    }
    else{
        operand2 += event.target.textContent.trim();
    }
});
fourBtn.addEventListener('click', (event) => {
    if(operator == ""){
        operand1 += event.target.textContent.trim();
    }
    else{
        operand2 += event.target.textContent.trim();
    }
});
fiveBtn.addEventListener('click', (event) => {
    if(operator == ""){
        operand1 += event.target.textContent.trim();
    }
    else{
        operand2 += event.target.textContent.trim();
    }
});
sixBtn.addEventListener('click', (event) => {
    if(operator == ""){
        operand1 += event.target.textContent.trim();
    }
    else{
        operand2 += event.target.textContent.trim();
    }
});
sevenBtn.addEventListener('click', (event) => {
    if(operator == ""){
        operand1 += event.target.textContent.trim();
    }
    else{
        operand2 += event.target.textContent.trim();
    }
});
eightBtn.addEventListener('click', (event) => {
    if(operator == ""){
        operand1 += event.target.textContent.trim();
    }
    else{
        operand2 += event.target.textContent.trim();
    }
});
nineBtn.addEventListener('click', (event) => {
    if(operator == ""){
        operand1 += event.target.textContent.trim();
    }
    else{
        operand2 += event.target.textContent.trim();
    }
});

addBtn.addEventListener('click', () => {
    operator = "addition";
});
subtractBtn.addEventListener('click', () => {
    operator = "subtraction";
});
multiplyBtn.addEventListener('click', () => {
    operator = "multiplication";
});
divideBtn.addEventListener('click', () => {
    operator = "division";
});

equalsBtn.addEventListener('click', () => {
    const result = operate();
    resultDisplay.textContent = result;
});