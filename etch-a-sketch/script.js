function generateCustomPlayground(numOfRows, numOfColumns){
    container.innerHTML = '';
    boxWidth = 640 / numOfColumns;
    boxHeight = 640 / numOfRows;
    for(let i = 1; i <= numOfRows; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j = 1; j <= numOfColumns; j++){
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.width = boxWidth + 'px';
            box.style.height = boxHeight + 'px';
            box.addEventListener('mouseenter', (event) => {
                event.target.style.backgroundColor = 'black';
            })
            row.appendChild(box);
        }
        container.appendChild(row);
    };
}

const container = document.querySelector('#container');
const generateCustomPlaygroundButton = document.querySelector('#generate-custom-playground-button')

generateCustomPlayground(16, 16);

generateCustomPlaygroundButton.addEventListener('click', () => {
    noOfRows = Number(prompt("Enter no of rows"));
    noOfColumns = Number(prompt("Enter no of columns"));
    generateCustomPlayground(noOfRows, noOfColumns);
})