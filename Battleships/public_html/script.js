var origBoard;
var board = [
    [1,0,0,1,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
]

const cells = document.querySelectorAll('.cell');
startGame();
function startGame(){
    document.querySelector(".endgame").style.display = "none";
    origBoard = Array.from(Array(100).keys());
    for(var i = 0; i < cells.length;i++)
    {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);
    }
}
function turnClick(square)
{
    console.log(Math.floor(square.target.id/10));
    if(board[Math.floor(square.target.id/10)][square.target.id - (Math.floor(square.target.id/10)*10)] == 1){
    document.getElementById(square.target.id).src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogxnxY2Ex5e_llvum12-RCGUijfI1GrDEW3SlS9QXEOPwjX4Q1g";
    }else{
    document.getElementById(square.target.id).src = "";
    }

}