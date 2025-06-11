let currentBrush = "black";

function getRandomValue(){
    const min = 0;
    const max = 100;
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomValue;
}

function getRandomColour(){
    const redColourValue = getRandomValue();
    const greenColourValue = getRandomValue();
    const blueColourValue = getRandomValue();
    return `rgb(${redColourValue}, ${greenColourValue}, ${blueColourValue})`;
}

function colourBlock(event){
    if(currentBrush == "rainbow"){
        event.target.style.backgroundColor = getRandomColour();
        event.target.style.opacity = "1";
    }
    else if(currentBrush == "black"){
        event.target.style.backgroundColor = "black";
        event.target.style.opacity = "1";
    }
    else if(currentBrush == "shade"){
        if(event.target.style.backgroundColor != "black"){
            event.target.style.backgroundColor = "black";
            event.target.style.opacity = "0.1";
        }
        else{
            let opacityInString = event.target.style.opacity;
            let opacityInFloat = parseFloat(opacityInString);
            opacityInFloat += 0.1;
            opacityInString = opacityInFloat.toString();
            event.target.style.opacity = opacityInString;
        }
    }
    else if(currentBrush == "eraser"){
        event.target.style.backgroundColor = "rgb(0, 0, 0)";
        event.target.style.opacity = "0";
    }
}

function generateCustomPlayground(numOfRows, numOfColumns){
    container.innerHTML = '';
    const boxWidth = 640 / numOfColumns;
    const boxHeight = 640 / numOfRows;
    for(let i = 1; i <= numOfRows; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j = 1; j <= numOfColumns; j++){
            const box = document.createElement('div');
            box.style.width = boxWidth + "px";
            box.style.height = boxHeight + "px";
            box.addEventListener('mouseenter', (event) => {
                colourBlock(event);
            })
            row.appendChild(box);
        }
        container.appendChild(row);
    };
}

const rainbowBrushButton = document.querySelector('#rainbow-brush-button');
const blackBrushButton = document.querySelector('#black-brush-button');
const shadeBrushButton = document.querySelector('#shade-brush-button');
const eraserButton = document.querySelector('#eraser-button');

rainbowBrushButton.addEventListener('click', () => {
    currentBrush = "rainbow";
})

blackBrushButton.addEventListener('click', () => {
    currentBrush = "black";
})

shadeBrushButton.addEventListener('click', () => {
    currentBrush = "shade";
})

eraserButton.addEventListener('click', () => {
    currentBrush = "eraser";
})

const container = document.querySelector('#container');
const generateCustomPlaygroundButton = document.querySelector('#generate-custom-playground-button');

generateCustomPlayground(16, 16);

generateCustomPlaygroundButton.addEventListener('click', () => {
    noOfRows = Number(prompt("Enter no of rows"));
    noOfColumns = Number(prompt("Enter no of columns"));
    generateCustomPlayground(noOfRows, noOfColumns);
})