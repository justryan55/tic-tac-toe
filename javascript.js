
function gameboard(){
    const rows = 3;
    const columns = 3;
    const gameboard = [];

    for (let i = 0; i < rows; i++){
        gameboard[i] = [];
        for (let j=0; j < columns; j++){
            gameboard[i].push(createCell());
        }
    }
}

function createCell(){    
        
} 

function createPlayer(name, symbol){
    return {
        name,
        symbol,
        introduction(){
            return `Welcome ${name}` 
        }
    }
}

const playerOne = createPlayer("Player One", "O");
const playerTwo = createPlayer("Player Two", "X");


function gameboardObjects(){

}

gameboard();

