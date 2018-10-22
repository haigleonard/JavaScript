var ships = [2,3,3,4,5]
var ships2 = [2,3,3,4,5]
var Cruiser = 0;
var board; 
var board2;

const cells = document.querySelectorAll('.cell');
startGame();
function checkSpace(x, y, s, d,p)
{
    var c = 1;
    if(s>3){s--;}
    for(var i = 0; i < s; i++)
    {
        if(d == 0){if(p[x][y+i] != 0){c = 0;}
        }else{if(p[x+i][y] != 0){c = 0; }}
    }
    return c;
}
function setShip(x,y,d, s, p)
{
    if(s>3){s--;}
    for(var i = 0; i < s; i++)
    {
        if(d == 0){
            if(s==3){p[x][y+i] = 31 + Cruiser;}
            else{p[x][y+i] = s;}
        }
        else{
            if(s==3){p[x+i][y] = 31 + Cruiser; }
            else{p[x+i][y] = s;}
        }
    }
    if(s==3)
    {
        Cruiser = 1;
    }
}
function setBoard(p)
{
    for(var i = 2; i < 7; i ++){
    var VH = Math.floor((Math.random() * 2) + 1);
    var conflict = 0;
    if(VH == 1){
        while(conflict == 0){
            var x = Math.floor(Math.random() * (10-i));
            var y = Math.floor(Math.random() * 10);
            if(checkSpace(x,y,i,1,p) == 1){
                setShip(x,y,1,i,p);
                conflict = 1;
            }
        }
    }else{
        while(conflict == 0){
            var x = Math.floor(Math.random() * 10);
            var y = Math.floor(Math.random() * (10-i));
            if(checkSpace(x,y,i,0,p) == 1){
                setShip(x,y,0, i,p);
                conflict = 1;
            }
        }
    }
    }
}
function startGame(){
    
    board2 = Array(10).fill().map(() => Array(10).fill(0));
    board = Array(10).fill().map(() => Array(10).fill(0));
    setBoard(board);Cruiser=0;setBoard(board2);
    document.querySelector(".endgame").style.display = "none";
    document.getElementById("p1").innerHTML = "Submarine: " + ships[0] + " Destroyer: " + ships[1]+ " Cruiser: " + ships[2]+ " Battleship: " + ships[3]+ " Aircraft Carrier: " + ships[4];
    for(var i = 0; i < cells.length;i++)
    {
        cells[i].addEventListener('click', turnClick, false);
        if(board2[(Math.floor(i/10))][(i - ((Math.floor(i/10))*10))] == 0){
            document.getElementById(i+100).src = "https://cdn1.vectorstock.com/i/1000x1000/11/05/cartoon-image-of-wave-icon-water-wave-symbol-vector-15661105.jpg";
        }
        else{
            document.getElementById(i+100).src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogxnxY2Ex5e_llvum12-RCGUijfI1GrDEW3SlS9QXEOPwjX4Q1g";
        }
    }
}
function AI()
{
    var x = Math.floor(Math.random() * 10);
    var y = Math.floor(Math.random() * 10);
    document.getElementById(((x*10)+y)+100).src = "";
    if(board[x][y] == 2){ships2[0]--;}
    if(board[x][y] == 31){ships2[1]--;}
    if(board[x][y] == 32){ships2[2]--;}
    if(board[x][y] == 4){ships2[3]--;}
    if(board[x][y] == 5){ships2[4]--;}
    document.getElementById("p2").innerHTML = "Submarine: " + ships2[0] + " Destroyer: " + ships2[1]+ " Cruiser: " + ships2[2]+ " Battleship: " + ships2[3]+ " Aircraft Carrier: " + ships2[4];
    
}
function turnClick(square)
{
    //console.log(Math.floor(square.target.id/10));
    if(board[Math.floor(square.target.id/10)][square.target.id - (Math.floor(square.target.id/10)*10)] == 2){
    document.getElementById(square.target.id).src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogxnxY2Ex5e_llvum12-RCGUijfI1GrDEW3SlS9QXEOPwjX4Q1g";
    ships[0]--;
    document.getElementById(square.target.id).removeEventListener("click", turnClick);
    }
    else if (board[Math.floor(square.target.id/10)][square.target.id - (Math.floor(square.target.id/10)*10)] == 31){
    document.getElementById(square.target.id).src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogxnxY2Ex5e_llvum12-RCGUijfI1GrDEW3SlS9QXEOPwjX4Q1g";
    ships[1]--;
    document.getElementById(square.target.id).removeEventListener("click", turnClick);
    }
    else if(board[Math.floor(square.target.id/10)][square.target.id - (Math.floor(square.target.id/10)*10)] == 32){
    document.getElementById(square.target.id).src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogxnxY2Ex5e_llvum12-RCGUijfI1GrDEW3SlS9QXEOPwjX4Q1g";
    ships[2]--;
    document.getElementById(square.target.id).removeEventListener("click", turnClick);
    }
    else if (board[Math.floor(square.target.id/10)][square.target.id - (Math.floor(square.target.id/10)*10)] == 4){
    document.getElementById(square.target.id).src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogxnxY2Ex5e_llvum12-RCGUijfI1GrDEW3SlS9QXEOPwjX4Q1g";
    ships[3]--;
    document.getElementById(square.target.id).removeEventListener("click", turnClick);
    }
    else if (board[Math.floor(square.target.id/10)][square.target.id - (Math.floor(square.target.id/10)*10)] == 5){
    document.getElementById(square.target.id).src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogxnxY2Ex5e_llvum12-RCGUijfI1GrDEW3SlS9QXEOPwjX4Q1g";
    ships[4]--;
    document.getElementById(square.target.id).removeEventListener("click", turnClick);
    }else{
    document.getElementById(square.target.id).src = "";
    }
    document.getElementById("p1").innerHTML = "Submarine: " + ships[0] + " Destroyer: " + ships[1]+ " Cruiser: " + ships[2]+ " Battleship: " + ships[3]+ " Aircraft Carrier: " + ships[4];
    if(ships[0] == 0 && ships[1] == 0 && ships[2] == 0 && ships[3] == 0 && ships[4] == 0)
    {
        document.getElementById("p1").innerHTML = "You Win!"; 
    }   
    AI();
}