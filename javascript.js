
function gameboard(){
    const rows = 3;
    const columns = 3;
    const gameboard = [];

    for (let i = 0; i < rows; i++){
        gameboard[i] = [];
        for (let j=0; j < columns; j++){
            gameboard[i].push(Cell());
            console.log(gameboard);
        }
    }
    
    function Cell(){
        let value = 0;
        
    }
}

function player(){
    
    function Player(name, symbol){
        this.name = name;
        this.symbol = symbol;
        this.introduction = (name) => {
            console.log(`Welcome ${name}`);
        }
    }

    const playerOne = new Player("Player One", "o");
    const playerTwo = new Player("Player Two", "x");

}

function gameboardObjects(){

}

player();
gameboard();