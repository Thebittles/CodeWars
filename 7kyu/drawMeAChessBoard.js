//https://www.codewars.com/kata/56242b89689c35449b000059/train/javascript

// 6 X 4
// [
//     ["O","X","O","X"],
//     ["X","O","X","O"],
//     ["O","X","O","X"],
//     ["X","O","X","O"],
//     ["O","X","O","X"],
//     ["X","O","X","O"]
// ]

function chessBoard(rows, columns) {
    
        let board = []

        for(let i = 0; i < rows; i++){
            board[i] = [];
            for(let j = 0; j < columns; j++){
                if(i % 2 == 0){
                    if(j % 2 == 0){
                        board[i][j] = "O"
                    } else {
                        board[i][j] = "X"
                    }
                } else {
                    if(j % 2 == 0){
                        board[i][j] = "X"
                    } else {
                        board[i][j] = "O"
                    }
                }
            }
        }

        return board;
    }



console.log(chessBoard(6, 4))
console.log(chessBoard(8, 2))