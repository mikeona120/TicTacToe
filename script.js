


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

    const checkWinner = () => {
        let winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

        for(x = 0; x < winConditions.length; x++){

            if(board[winConditions[x][0]] == "X" && board[winConditions[x][1]] =="X"  && board[winConditions[x][2]] =="X"){
                alert("Player 1 Wins!");
            }
            else if(board[winConditions[x][0]] == "O" && board[winConditions[x][1]] =="O"  && board[winConditions[x][2]] =="O"){
                alert("Player 2 Wins!");
            }

        }

        
        

    };
    
    return {getBoard, setBoard, clearBoard,setPlayer1,setPlayer2,checkWinner}
};

let board = new Array(9);
let player = "player1";
let gridMarker = "X";
let gridFilledClass = "grid-item-filled-X";

const boardObject = gameBoard(board);


let grids = document.getElementsByClassName("grid-item");
for(x=0;x<grids.length;x++){
    grids[x].addEventListener('click', e => e.target.classList.add(gridFilledClass));
    grids[x].addEventListener('click', e => e.target.innerHTML = gridMarker);
};

$('.grid-item').click(function() {
    boardObject.setBoard(this.id);
    boardObject.getBoard();
    boardObject.checkWinner();
});

$('#clear-btn').click(function() { 
    boardObject.clearBoard(); 
    boardObject.getBoard();
    for(x=0;x<grids.length;x++){
        grids[x].classList.remove("grid-item-filled-X");
        grids[x].classList.remove("grid-item-filled-O");
        grids[x].innerHTML = "-";
    };
});

$('#player1-btn').click(function() {
    boardObject.setPlayer1(); 
});

$('#player2-btn').click(function() {
    boardObject.setPlayer2();
});


    


//Add Computer AI