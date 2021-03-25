


const gameBoard = (board,index) =>{

    const getBoard = () => {
        console.log(board);
    };

    const setBoard = (index) => { //add a check winning combo function
        
        if(player=="player1"){
            if(board[index]==null){
                board[index] = "X";
            }
        }
        else if(player=="player2"){
            if(board[index]==null){
                board[index] = "O";
            }
        } 
        
    };

    const clearBoard = () => {
        board = new Array(9);
    };

    const setPlayer1 = () => {
        player = "player1";
        gridMarker = "X";
        gridFilledClass = "grid-item-filled-X";
    };

    const setPlayer2 = () => {
        player = "player2";
        gridMarker = "O";
        gridFilledClass = "grid-item-filled-O";
    };
    
    return {getBoard, setBoard, clearBoard,setPlayer1,setPlayer2}
};

let board = new Array(9);
let player = "player1";
let gridMarker = "X";
let gridFilledClass = "grid-item-filled-X";

const boardObject = gameBoard(board);


$('.grid-item').click(function() {
    boardObject.setBoard(this.id);
    boardObject.getBoard();
});

$('#clear-btn').click(function() { //need to clear CSS
    boardObject.clearBoard(); 
});

$('#player1-btn').click(function() {
    boardObject.setPlayer1(); 
});

$('#player2-btn').click(function() {
    boardObject.setPlayer2();
});

let grids = document.getElementsByClassName("grid-item");
for(x=0;x<grids.length;x++){
    grids[x].addEventListener('click', e => e.target.classList.add(gridFilledClass));
    grids[x].addEventListener('click', e => e.target.innerHTML = gridMarker);
};
    



//Add conditionals
//Add Computer AI