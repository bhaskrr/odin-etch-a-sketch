let squareDivs = parseInt(prompt("Enter the number of squares"));

const divDisplay = document.querySelector('h3');
divDisplay.innerText = `${squareDivs} X ${squareDivs}`;

const squareContainer = document.querySelector('.square-container');
squareContainer.style.width = '540px';
squareContainer.style.height = '540px';

//generate colors
const generateColor = () => {
    let R, G, B;
    R = Math.floor(Math.random() * 255);
    G = Math.floor(Math.random() * 255);
    B = Math.floor(Math.random() * 255);
    return `RGB(${R},${G},${B})`;
}

//set background color of small divs
const setColor = (e) => {
    const element = e.target;
    element.style.backgroundColor = generateColor();
}

//generate the squares
const generateSquare = (divCount) => {
    for (let i = 0; i < divCount * divCount; i++) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'square-div');
        let width = parseInt(squareContainer.style.width) / squareDivs;
        let height = parseInt(squareContainer.style.height) / squareDivs;

        // console.log(width, height);

        newDiv.style.width = `${width}px`;
        newDiv.style.height = `${height}px`;

        newDiv.onmouseover = setColor;
        squareContainer.appendChild(newDiv);
    }
}

generateSquare(squareDivs);