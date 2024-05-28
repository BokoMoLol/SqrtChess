document.addEventListener('DOMContentLoaded', () => {
    const boardSize = 5;
    const gameBoard = document.getElementById('game-board');
    let board = Array.from({ length: boardSize }, () => Array(boardSize).fill(null));

    function initializeBoard() {
        gameBoard.innerHTML = '';
        for (let row = 0; row < boardSize; row++) {
            for (let col = 0; col < boardSize; col++) {
                createTile(row, col);
            }
        }
        placeSpecialTiles();
        updateBoard();
    }

    function createTile(row, col) {
        const tile = document.createElement('div');
        tile.id = `tile-${row}-${col}`;
        tile.className = 'tile';
        tile.addEventListener('click', () => clickTile(row, col));
        gameBoard.appendChild(tile);
    }

    function placeSpecialTiles() {
        board[1][2] = { type: 'sqrt', value: '√4' };
        board[3][3] = { type: 'sqrt', value: '√9' };
    }

    function updateBoard() {
        for (let row = 0; row < boardSize; row++) {
            for (let col = 0; col < boardSize; col++) {
                const tile = document.getElementById(`tile-${row}-${col}`);
                if (board[row][col]) {
                    tile.textContent = board[row][col].value;
                    if (board[row][col].type === 'sqrt') {
                        tile.classList.add('sqrt');
                    }
                } else {
                    tile.textContent = '';
                    tile.classList.remove('sqrt');
                }
            }
        }
    }

    function clickTile(row, col) {
        if (board[row][col] && board[row][col].type === 'sqrt') {
            alert(`You clicked on a square root tile: ${board[row][col].value}`);
        } else {
            alert('You clicked on an empty tile');
        }
    }

    initializeBoard();
});
