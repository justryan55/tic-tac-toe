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

            function addClickListener(i){
                cell.addEventListener("click", () => {
                    cell.innerText = i;
                });
            }
            addClickListener(i);
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

function gameController(){

};
// function createPlayer(name, symbol){
//     return {
//         name,
//         symbol,
//         introduction(){
//             return `Welcome ${name}` 
//         }
//     }
// }

// const playerOne = createPlayer("Player One", "O");
// const playerTwo = createPlayer("Player Two", "X");


