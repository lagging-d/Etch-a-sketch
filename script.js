const gridContainer = document.querySelector(`.gridContainer`);

const gridSquare = document.createElement(`div`);
gridSquare.classList.add(`square`);
gridContainer.appendChild(gridSquare);


for (let i = 1; i < 32 * 32; ++i) {
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
let number = 32;

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
        console.log(newSquares);
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
            square.style.width = childSquareWidth;
            square.style.height = childSquareHeight 
        })

    } else alert (`THE RANGE IS 1-100!`)
})

// childSquareWidth.style.width = `calc(Math.sqrt(${number})%)`;


const childSquare = document.querySelectorAll(`.gridContainer .square`);
const childSquareWidth = `${Math.floor(200 / number)}px`;
const childSquareHeight = childSquareWidth;

childSquare.forEach(square => {
    square.style.width = childSquareWidth;
    square.style.height = childSquareHeight
})


