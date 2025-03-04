const gridContainer = document.querySelector(`.gridContainer`);

const gridSquare = document.createElement(`div`);
gridSquare.classList.add(`square`);
gridContainer.appendChild(gridSquare);


for (let i = 1; i < 16 * 16; ++i) {
    let anotherSquare = gridSquare.cloneNode(false);
    gridContainer.appendChild(anotherSquare);
}


const squares = document.querySelectorAll(`.square`);

function blackOut() { squares.forEach( (elem) => {
    elem.addEventListener(`mouseenter`, () => {
        let randomNum1 = Math.floor(Math.random() * 255);
        let randomNum2 = Math.floor(Math.random() * 255);
        let randomNum3 = Math.floor(Math.random() * 255);
        elem.style.backgroundColor = `rgb(${randomNum3} 
                                    ${randomNum2}  
                                    ${randomNum1})`;
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
        for (i = 1; i < number * number; ++i) {
            let anotherSquare = gridSquare.cloneNode(false);
            gridContainer.appendChild(anotherSquare);
        } 
        
        let newSquares = document.querySelectorAll(`.square`);
        function newBlackOut() { newSquares.forEach( (elem) => {
            elem.addEventListener(`mouseenter`, () => {
                let randomNum1 = Math.floor(Math.random() * 255);
                let randomNum2 = Math.floor(Math.random() * 255);
                let randomNum3 = Math.floor(Math.random() * 255);
                elem.style.backgroundColor = `rgb(${randomNum3} 
                                            ${randomNum2}  
                                            ${randomNum1})`;
            })
        })
        }
        newBlackOut();

        newSquares.forEach(square => {
            square.style.width = `${800 / number}px`;
            square.style.height = `${800 / number}px`;
        })

    } else alert (`THE RANGE IS 1-100!`)
})

// childSquareWidth.style.width = `calc(Math.sqrt(${number})%)`;


const childSquare = document.querySelectorAll(`.gridContainer .square`);
const childSquareWidth = `${800 / number}px`;
const childSquareHeight = childSquareWidth;

childSquare.forEach(square => {
    square.style.width = childSquareWidth;
    square.style.height = childSquareHeight
})

