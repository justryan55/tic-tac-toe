const gameContainer = document.querySelector(".game");

(function drawBoard(){
    const rows = 3;
    const columns = 3;
    const gameboard = [];
    let table = document.createElement("div");
    table.classList.add("table");
    
    for (let i = 0; i < rows; i++){
        gameboard[i] = [];
        for (let j=0; j < columns; j++){
            gameboard[i].push(createCell());
            let cell = document.createElement('div');
            cell.classList.add("cell");
            table.appendChild(cell);
        }
        gameContainer.appendChild(table);
    }
})();

function createCell(){    
    let value = 0;
    const addUserInput = () => {
        // value = 
    }
    return {
        addUserInput
    }

};

(function gameController(){
    const gameboardSquares = gameContainer.querySelectorAll(".table div");
    const gameboardSquaresArray = Array.from(gameboardSquares);
    const gameText = document.querySelector(".text");
    const playerTurn = [];
    const storeSquareIndex = [];
    
    function createPlayer(name, symbol){
            return {
                name,
                symbol,
                displayTurn(){
                    return gameText.innerText = `It is ${name}'s turn`; 
                }
            }
        }
        
    const playerOne = createPlayer("Player One", "O");
    const playerTwo = createPlayer("Player Two", "X");

    function changeTurn(){
        
    }

    function userInput(){
        console.log(storeSquareIndex);
        changeTurn();
        checkWinner();
    }

    function checkWinner(){
      
    }

    gameboardSquaresArray.forEach((square) => {
        square.addEventListener("click", () => {
            let squareIndex = gameboardSquaresArray.indexOf(square);
            storeSquareIndex.push(squareIndex); 
            userInput();
        });
    })

})();



