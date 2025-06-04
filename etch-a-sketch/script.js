const container = document.querySelector('#container');

for(let i = 1; i <= 16; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    for(let j = 1; j <= 16; j++){
        const box = document.createElement('div');
        box.classList.add('box');
        row.appendChild(box);
    }
    container.appendChild(row);
};