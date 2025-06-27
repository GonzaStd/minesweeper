let size = 3;
let sizeBorder = size + 2; 
let probability = 30;
let board = new Array(sizeBorder);

function mineCounter(cellToCheck, i, j){
    if(cellToCheck == '*') board[i][j] += 1; // Evaluamos si la celda de alrededor es una mina
    console.log(cellToCheck, board[i][j]);
}


for(i=0;i<sizeBorder;i++){
    let row = new Array(sizeBorder);
    if(i!=0 || i!=sizeBorder-1) {
        row.fill(0, 1, size + 1); // [0, 1, 2, 3, 4] -> 5 [NULL, 0, 0, 0, NULL] 
        row[0] = -2;
        row[sizeBorder-1] = -2;
        mines_quantity = Math.ceil((size*probability)/100);
        for(j=0;j<mines_quantity;j++){
            index = (Math.ceil(Math.random() * 1000)) % size + 1;
            row[index] = '*';
        }
    }
    if (i==0 || i==sizeBorder-1) {
        row.fill(-2);
    }

    board[i] = row;
}

for(i=1;i<size;i++){
    for(j=1;j<size;j++){
        let x = board[i][j]; // Casilla Actual
        if (x != '*'){
            mineCounter(board[i-1][j-1], i, j); // Arriba Izquierda
            mineCounter(board[i-1][j],   i, j); // Arriba
            mineCounter(board[i-1][j+1], i, j); // Arriba Derecha
            mineCounter(board[i][j-1],   i, j); // Izquierda
            mineCounter(board[i][j+1],   i, j); // Derecha
            mineCounter(board[i+1][j-1], i, j); // Abajo Izquierda
            mineCounter(board[i+1][j],   i, j); // Abajo
            mineCounter(board[i+1][j+1], i, j); // Abajo Derecha
        }
    }
}

console.log(board)