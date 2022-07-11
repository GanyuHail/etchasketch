function makeGrid(num) {
document.addEventListener('gridMaker', function() {
    var div = document.createElement('div');
    div.id = 'grid';
    div.innerHTML = "";
 
    document.body.appendChild(div);
}, false);
};

makeGrid(16);