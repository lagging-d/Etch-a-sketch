const gridContainer = document.querySelector(`.gridContainer`);

const gridSquare = document.createElement(`div`);
gridSquare.classList.add(`square`);
gridContainer.appendChild(gridSquare);


for (let i = 1; i < 16; ++i) {
    let anotherSquare = gridSquare.cloneNode(false);
    gridContainer.appendChild(anotherSquare);
}


const square = document.querySelectorAll(`.square`);

let squareArr = Array.from(square);

squareArr.forEach( (elem) => {
    elem.addEventListener(`mouseenter`, () => {
        elem.setAttribute(`style`, `background-color: black;`);
    })
})


const btn = document.querySelector(`#btnnumber`);

let number;

btn.addEventListener(`click`, () => {
    number = +prompt(`Enter a number (no more than 100)`);  

    removeSquares();

    if (number > 0 && number <= 100) {
        
    }
})

function removeSquares() {
    squareArr.forEach(square => {
        square.remove();
    })
}