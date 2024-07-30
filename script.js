const gridContainer = document.querySelector(`.gridContainer`);

const gridSquare = document.createElement(`div`);
gridSquare.classList.add(`square`);
gridContainer.appendChild(gridSquare);


for (let i = 1; i < 16; ++i) {
    let anotherSquare = gridSquare.cloneNode(false);
    gridContainer.appendChild(anotherSquare);
}


const squares = document.querySelectorAll(`.square`);

function blackOut() { squares.forEach( (elem) => {
    elem.addEventListener(`mouseenter`, () => {
        elem.style.backgroundColor = `black`;
    })
})
}

blackOut();

const btn = document.querySelector(`#btnnumber`);
let number = 16;

btn.addEventListener(`click`, () => {
    number = +prompt(`Enter a number (no more than 100)`);  

    let newSquares = document.querySelectorAll(`.square`);

    newSquares.forEach(square => {
        gridContainer.removeChild(square);
    })
    gridSquare.removeAttribute(`style`);
    gridContainer.appendChild(gridSquare);

    if (number > 0 && number <= 100) {
        for (i = 1; i < number * 2; ++i) {
            let anotherSquare = gridSquare.cloneNode(false);
            gridContainer.appendChild(anotherSquare);
        } 
        
        let newSquares = document.querySelectorAll(`.square`);
        console.log(newSquares);
        function newBlackOut() { newSquares.forEach( (elem) => {
            elem.addEventListener(`mouseenter`, () => {
                elem.style.backgroundColor = `black`;
            })
        })
        }
        newBlackOut();

    } else alert (`THE RANGE IS 1-100!`)
})

// childSquareWidth.style.width = `calc(Math.sqrt(${number})%)`;


const childSquare = document.querySelectorAll(`.gridContainer .square`);
const childSquareWidth = `${Math.sqrt(number)}%`;
const childSquareHeight = childSquareWidth;

childSquare.forEach(square => {
    square.style.width = childSquareWidth;
    square.style.height = childSquareHeight
})

