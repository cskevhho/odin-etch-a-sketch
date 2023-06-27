const wrap = document.createElement("div");
wrap.classList.add("wrapper");
document.body.appendChild(wrap);
let counter = 0;

const board = document.createElement("div");
board.classList.add("gameboard");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = counter++;
    board.appendChild(cell);
  }
}
wrap.appendChild(board);
