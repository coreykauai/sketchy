// make div cont to store child divs(squares)
// made a variable to store the number of squares
// stored html parent container div into var
// create columns to hold divs
// for loop to create columns
// for loop to create squares and append them to columns
// create func to change background color of cells

let numberOfSquares = 16;

let squareNumberBtn = document.getElementById("numberSquares");
let clearer = document.getElementById("clearer");
let colorBtn = document.getElementById("color");
let div_container = document.getElementById("parent-container");

squareNumberBtn.addEventListener("click", () => {
  numberOfSquares = prompt("Type a number of squares 1-100");

  while (numberOfSquares > 100) {
    numberOfSquares = prompt("To big, try again 1-100");
  }
  div_container.innerHTML = "";
  generateGrid();
});

clearer.addEventListener("click", () => {
  numberOfSquares = 16;
  div_container.innerHTML = "";
  generateGrid();
});

const styleSquare = (evt) => {
  console.log("black");
  evt.target.style.backgroundColor = "black";
};

const paintGrid = () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((sq) => {
    sq.addEventListener("mouseover", styleSquare);
  });
};

const rainbowSquare = (evt) => {
  let r = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  console.log(`rbg(${r}, ${b}, ${g})`);
  evt.target.style.backgroundColor = `rgb(${r}, ${b}, ${g})`;
};

const rainbowGrid = () => {
  console.log("rainbow grid");
  const squares = document.querySelectorAll(".square");
  squares.forEach((sq) => {
    sq.removeEventListener("mouseover", styleSquare);
    sq.addEventListener("mouseover", rainbowSquare);
  });
};

const generateGrid = () => {
  for (let i = 0; i < numberOfSquares; i++) {
    const column = document.createElement("div");
    column.classList.add("column");

    for (let j = 0; j < numberOfSquares; j++) {
      const square = document.createElement("div");
      column.appendChild(square);
      square.classList.add("square");
    }

    div_container.appendChild(column);
  }
  paintGrid();
};

generateGrid();
colorBtn.addEventListener("click", rainbowGrid);
