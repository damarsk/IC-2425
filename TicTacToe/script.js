document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("game-board");
  const startButton = document.getElementById("start-game");
  const resetButton = document.getElementById("reset-game");

  let currentPlayer = "X";
  let gameActive = false;
  let boardState = Array(8).fill(null);

  // Create game board cells
  function createBoard() {
    board.innerHTML = ""; // Clear the board
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.index = i;
      board.appendChild(cell);
      cell.addEventListener("click", () => handleCellClick(i));
    }
  }

  // Handle cell click
  function handleCellClick(index) {
    if (!gameActive || boardState[index]) return;

    boardState[index] = currentPlayer;
    document.querySelectorAll(".cell")[index].textContent = currentPlayer;

    if (checkWinner()) {
      alert(`${currentPlayer} wins!`);
      gameActive = false;
    } else if (boardState.every((cell) => cell)) {
      alert("It's a draw!");
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }

  // Check for a winner
  function checkWinner() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winningCombinations.some((combination) =>
      combination.every((index) => boardState[index] === currentPlayer)
    );
  }

  // Start game
  startButton.addEventListener("click", () => {
    gameActive = true;
    boardState.fill(null);
    currentPlayer = "X";
    createBoard();
  });

  // Reset game
  resetButton.addEventListener("click", () => {
    gameActive = false;
    boardState.fill(null);
    currentPlayer = "X";
    createBoard();
  });

  // Initialize board on load
  createBoard();
});  