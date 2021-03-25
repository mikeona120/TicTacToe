


const gameBoard = (board,index) =>{

    const getBoard = () => {
        console.log(board);
    };

    const setBoard = (index) => {
        board[index] = 1;
    };

    const clearBoard = () => {
        board = new Array(9);
    };
    
    return {getBoard, setBoard, clearBoard}
};

let board = new Array(9);
const boardObject = gameBoard(board);


$('.grid-item').click(function() {
    boardObject.setBoard(this.id);
    boardObject.getBoard();
});

let grids = document.getElementsByClassName("grid-item");
for(x=0;x<grids.length;x++){
    grids[x].addEventListener('click', e => e.target.classList.add('grid-item-filled'));
    grids[x].addEventListener('click', e => e.target.innerHTML = "X");
};
    

//Add conditionals
//Add Computer AI