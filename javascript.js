
function Cell(tableElement, cellClicked, cellUpdated) {
    this.value = null;
    this.handleClick = function() {
        if(this.value) {
            return;
        }
        const turn = cellClicked();
        cellElement.innerText = (turn ? "x" : "o");
        this.value = (turn ? "x" : "o");
        cellUpdated();
    }

    let cellElement = document.createElement('div');
    cellElement.classList.add("cell");

    cellElement.addEventListener('click', () => {
        this.handleClick();
    })

    tableElement.appendChild(cellElement);
}

function TicTacToeGame() {
    this.rows = 3;
    this.columns = 3;
    this.gameboard = [];
    this.gameContainer = document.querySelector(".game");
    this.gameText = document.querySelector(".text");
    this.playAgainText = document.querySelector(".play-again");
    this.start = function() {
        this.drawBoard();
    }
    this.drawBoard = () => {
        let table = document.createElement("div");
        table.classList.add("table");
        
        for (let i = 0; i < this.rows; i++){
            this.gameboard[i] = [];
            for (let j=0; j < this.columns; j++) {
                const cell = new Cell(table, () => {
                    const t = this.isPlayerOnesTurn;
                    this.isPlayerOnesTurn = !this.isPlayerOnesTurn;
                    return t;
                }, () => {
                    this.checkIfThereIsAWinner();
                });
                this.gameboard[i].push(cell);
            }
            this.gameContainer.appendChild(table);
        }
    }
    this.checkIfThereIsAWinner = () => {
        for (let index = 0; index < 3; index++) {
            if(this.gameboard[index][0].value && (this.gameboard[index][0].value === this.gameboard[index][1].value) && (this.gameboard[index][1].value === this.gameboard[index][2].value)) {
                this.gameText.innerText = `${this.gameboard[index][0].value} wins!`;
                this.playRound();
            } else if(this.gameboard[1][index].value && (this.gameboard[0][index].value === this.gameboard[1][index].value) && (this.gameboard[1][index].value === this.gameboard[2][index].value)) {
                this.gameText.innerText = `${this.gameboard[0][index].value} wins!`;
                this.playRound();
            } else if (this.gameboard[index][index].value && (this.gameboard[0][0].value === this.gameboard[1][1].value) && (this.gameboard[1][1].value === this.gameboard[2][2].value)) {
                this.gameText.innerText = `${this.gameboard[index][index].value} wins!`;
                this.playRound();
            } else if ((this.gameboard[2][0].value || this.gameboard[0][2].value) && (this.gameboard[0][2].value === this.gameboard[1][1].value) && (this.gameboard[1][1].value === this.gameboard[2][0].value)) {
                this.gameText.innerText = `${this.gameboard[index][0].value} wins!`;
                this.playRound(); 
            // } else if (!this.gameboard.value){ Need to include login for if board fills up with no winner
            //     alert("Hello")
            }
        }
    }

    this.playRound = () => {
        if (this.checkIfThereIsAWinner){
            this.playAgainText.innerText = "Play again?";
            this.playAgainText.addEventListener("click", this.resetGame)
        }
    }

    this.resetGame = () => {
        this.gameboard = [];
        this.gameContainer = [];
    }
}

const ticTacToe = new TicTacToeGame();
ticTacToe.start();
