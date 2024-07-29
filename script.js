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

function blackOut() { squareArr.map( (elem) => {
    elem.addEventListener(`mouseenter`, () => {
        elem.setAttribute(`style`, `background-color: black;`);
    })
})
}

blackOut();

const btn = document.querySelector(`#btnnumber`);
let number;

btn.addEventListener(`click`, () => {
    number = +prompt(`Enter a number (no more than 100)`);  

    const removeArr = squareArr.map(square => {
        square.remove();
    })
    console.log(removeArr);
    gridSquare.removeAttribute(`style`);
    gridContainer.appendChild(gridSquare);

    if (number > 0 && number <= 100) {
        for (i = 1; i < number; ++i) {
            let anotherSquare = gridSquare.cloneNode(false);
            gridContainer.appendChild(anotherSquare);
        }
        blackOut();
    }
})

