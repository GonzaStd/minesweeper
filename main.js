function mineCounter(exp, cell){
    if(exp == '*') cell+=1;
    console.log(cell);
}

function config(event){
    event.preventDefault();
    let size = +event.target.size.value;
    let sizeBorder = size + 2
    let probability = +event.target.probability.value;
    let board = new Array(sizeBorder);
    for(i=0;i<sizeBorder;i++){
        let row = new Array(sizeBorder);
        if(i!=0 || i!=sizeBorder-1) {
            row.fill('0', 1, size + 1); // [0, 1, 2, 3, 4] -> 5 [NULL, 0, 0, 0, NULL] 
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
    
    // Ya tenemos el tablero lleno de minas, falta detectar cuantas minas hay en un rango de 3
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

    // Pasamos el tablero a la página
    
}