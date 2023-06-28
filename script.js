const wrap = document.createElement("div");
wrap.classList.add("wrapper");
document.body.appendChild(wrap);
let gridSize = 16;
let isMouseDown = false;

const board = document.createElement("div");
board.classList.add("gameboard");
board.id = "gameboard";

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function generateGameboard(gridSize) {
  if (gridSize < 101) {
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.height = `${880 / gridSize}px`;
        cell.style.width = `${880 / gridSize}px`;

        cell.addEventListener("mousedown", () => {
          isMouseDown = true;
        });

        cell.addEventListener("mouseenter", (event) => {
          if (isMouseDown && event.buttons === 1) {
            cell.style.backgroundColor = `rgb(${getRandomNumber(
              0,
              255
            )}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
          }
        });

        cell.addEventListener("mouseup", () => {
          isMouseDown = false;
        });

        board.appendChild(cell);
      }
    }
  }
}

const btn = document.createElement("button");
btn.classList.add("change");
btn.textContent = `Change Grid Size?`;
btn.onclick = () => {
  gridSize = Number(prompt("Enter new side length (limit 100):"));
  if (gridSize > 100) {
    alert("Please enter a number under 101.");
    gridSize = Number(prompt("Enter new side length (limit 100):"));
  }
  document.getElementById("gameboard").innerHTML = "";
  generateGameboard(gridSize);
};
wrap.appendChild(board);
wrap.appendChild(btn);
generateGameboard(gridSize);
