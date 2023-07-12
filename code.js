// make div cont to store child divs(squares)
// made a variable to store the number of squares
// stored html parent container div into var
// create columns to hold divs
// for loop to create columns
// for loop to create squares and append them to columns
// create func to change background color of cells

// let numberOfSquares = 16;

// let squareNumberBtn = document.getElementById("numberSquares");
// let clearer = document.getElementById("clearer");
// let div_container = document.getElementById("parent-container");

// squareNumberBtn.addEventListener("click", () => {
//   numberOfSquares = prompt("Type a number of squares 1-100");

//   if (numberOfSquares > 100) {
//     return (numberOfSquares = prompt("Type a number of squares 1-100"));
//   }
//   div_container.innerHTML = "";
//   generateGrid();
// });

// clearer.addEventListener("click", () => {
//   numberOfSquares = 16;
//   div_container.innerHTML = "";
//   generateGrid();
// });

// const generateGrid = () => {
//   for (let i = 0; i < numberOfSquares; i++) {
//     const column = document.createElement("div");
//     column.classList.add("column");

//     for (let j = 0; j < numberOfSquares; j++) {
//       const square = document.createElement("div");
//       column.appendChild(square);
//       square.classList.add("square");
//       square.addEventListener("mouseover", () => {
//         square.style.backgroundColor = "black";
//       });
//     }

//     div_container.appendChild(column);
//   }
// };

// generateGrid();

let numberOfSquares = 16;

let squareNumberBtn = document.getElementById("numberSquares");
let clearer = document.getElementById("clearer");
let color = document.getElementById("color");
let div_container = document.getElementById("parent-container");

squareNumberBtn.addEventListener("click", () => {
  numberOfSquares = prompt("Type a number of squares 1-100");

  if (numberOfSquares > 100) {
    return (numberOfSquares = prompt("Type a number of squares 1-100"));
  }
  div_container.innerHTML = "";
  generateGrid();
});

clearer.addEventListener("click", () => {
  numberOfSquares = 16;
  div_container.innerHTML = "";
  generateGrid();
});

color.addEventListener("click", () => {
  square.style.backgroundColor = "blue";
  div_container.innerHTML = "";
});

const generateGrid = () => {
  for (let i = 0; i < numberOfSquares; i++) {
    const column = document.createElement("div");
    column.classList.add("column");

    for (let j = 0; j < numberOfSquares; j++) {
      const square = document.createElement("div");
      column.appendChild(square);
      square.classList.add("square");
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
      });
    }

    div_container.appendChild(column);
  }
};

generateGrid();
