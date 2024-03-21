import goblin from "../img/goblin.png";

// Создание аватарки
const character = document.createElement("img");
character.src = goblin;
character.classList.add("character");

// Добавление в поле
const gameBoard = document.querySelector(".game-board");
gameBoard.appendChild(character);

// Функция рандомной позиции
function getRandomPosition() {
  const row = Math.floor(Math.random() * 4);
  const column = Math.floor(Math.random() * 4);
  return [row, column];
}

// функция перемещения
function moveCharacter() {
  const currentPosition = getRandomPosition();
  character.style.gridColumn = currentPosition[1] + 1;
  character.style.gridRow = currentPosition[0] + 1;
}

// Интервал
setInterval(moveCharacter, 2000);
