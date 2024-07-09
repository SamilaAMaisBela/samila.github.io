// script.js

const board = document.querySelector('.board');
const status = document.querySelector('.status');
const restartButton = document.querySelector('.restart-button');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningMessage = () => `Jogador ${currentPlayer} venceu!`;
const drawMessage = () => `Empate!`;
const currentPlayerTurn = () => `Vez do jogador ${currentPlayer}`;

status.textContent = currentPlayerTurn();

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell'));

    if (gameState[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    clickedCell.style.color = currentPlayer === 'X' ? '#007bff' : '#28a745';
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 6; i += 3) {
        if (gameState[i] !== '' && gameState[i] === gameState[i + 1] && gameState[i + 1] === gameState[i + 2]) {
            roundWon = true;
            break;
        }
    }

    for (let i = 0; i <= 2; i++) {
        if (gameState[i] !== '' && gameState[i] === gameState[i + 3] && gameState[i + 3] === gameState[i + 6]) {
            roundWon = true;
            break;
        }
    }

    if (gameState[0] !== '' && gameState[0] === gameState[4] && gameState[4] === gameState[8]) {
        roundWon = true;
    }

    if (gameState[2] !== '' && gameState[2] === gameState[4] && gameState[4] === gameState[6]) {
        roundWon = true;
    }

    if (roundWon) {
        status.textContent = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes('');
    if (roundDraw) {
        status.textContent = drawMessage();
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    status.textContent = currentPlayerTurn();
}

function handleRestartGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    status.textContent = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
    });
    document.querySelectorAll('.cell').forEach(cell => {
        cell.style.color = '#000';
    });
}

board.addEventListener('click', handleCellClick);
restartButton.addEventListener('click', handleRestartGame);
