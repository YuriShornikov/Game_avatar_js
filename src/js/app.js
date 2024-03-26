import goblin from "../img/goblin.png";

class Game {
  constructor() {
    this.boardSize = 4;
    this.character = 0;
    this.board = 0;
    this.init();
  }

  init() {
    this.createBoard();
    this.createCharacter();
    setInterval(() => this.moveCharacter(), 1000);
  }

  createBoard() {
    this.board = document.querySelector('.game-board');
  }

  // Создание гоблина
  createCharacter() {
    this.character = document.createElement('img');
    this.character.src = goblin;
    this.character.className = 'character';
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

const game = new Game();
