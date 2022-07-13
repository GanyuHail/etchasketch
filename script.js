var grid = document.querySelector('.grid');

function createGrid() {
    var gridNum = document.getElementById("gridNum").valueAsNumber;
    removeAllChildNodes(parent);
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${gridNum}, 2fr); grid-template-rows: repeat(${gridNum}, 2fr);`);
    for (let i = 0; i < gridNum * gridNum; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = 'pink';
        })
        grid.appendChild(div);
    }
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

function resetGrid() {
    removeAllChildNodes(grid);
};

function colorRan() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const color = document.querySelector('#color');
color.addEventListener('click', function () {
    let val = document.getElementById('gridNum').value;
    let cell = grid.children;
    for (let i = 0; i < val * val; i++) {
        cell[i].addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = colorRan();
        })
    }
});
