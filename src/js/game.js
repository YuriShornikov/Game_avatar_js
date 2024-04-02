import goblin from "../img/goblin.png";

export default class Game {
  constructor() {
    this.boardSize = 4;
    this.character = 0;
    this.board = 0;
  }

  init() {
    this.createBoard();
    this.createCharacter();
    setInterval(() => this.moveCharacter(), 1000);
  }

  createBoard() {
    this.board = document.querySelector(".game-board");

    for (let i = 0; i < this.boardSize * this.boardSize; i += 1) {
      const cellEl = document.createElement("div");
      cellEl.classList.add("game-board-cell");
      this.board.appendChild(cellEl);
    }
  }

  // Создание гоблина
  createCharacter() {
    this.character = document.createElement("img");
    this.character.src = goblin;
    this.character.className = "character";
    this.board.appendChild(this.character);
  }

  // Перемещение внутри
  moveCharacter() {
    const row = Math.floor(Math.random() * this.boardSize) + 1;
    const column = Math.floor(Math.random() * this.boardSize) + 1;
    this.character.style.gridColumn = column;
    this.character.style.gridRow = row;
  }
}
