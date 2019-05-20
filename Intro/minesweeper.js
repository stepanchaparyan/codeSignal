let matrix = [[true, false, false],
              [false, true, false],
              [false, false, false]]

matrix =      [[true,false,false,true], 
              [false,false,true,false], 
              [true,true,false,true]]

function setValue(newMatrix,ii,jj) {
    let tempMatrix = initBoard(newMatrix);
    for (let i = (ii-1); i < (ii + 2); i++) {
        for (let j = (jj-1); j < (jj + 2); j++) {
            if (i < 0) { i = 0 }
            if (j < 0) { j = 0 }
            tempMatrix[i][j] = newMatrix[i][j] + 1;
            console.log(tempMatrix);
        }
    }
    return tempMatrix;
}

function initBoard(matrix) {
    let tempMatrix = JSON.parse(JSON.stringify(matrix));
    for (let i = 0; i < matrix.length; i++) {        
        for (let j = 0; j < matrix[0].length; j++) {
            tempMatrix[i][j] = 0;
        }          
    }
    return tempMatrix;
}

function minesweeper(matrix) {
    let newMatrix = initBoard(matrix);
    let newMatrix2 = JSON.parse(JSON.stringify(newMatrix));
    for (let i = 0; i < matrix.length; i++) {        
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == true) {
                newMatrix2 = setValue(newMatrix,i,j);
                newMatrix = JSON.parse(JSON.stringify(newMatrix2));
            }           
        }
    }

    // for (let i = 0; i < matrix.length; i++) {        
    //     for (let j = 0; j < matrix[0].length; j++) {
    //         if (matrix[i][j] == true) {
    //             newMatrix[i][j] = 1;
    //         }           
    //     }
    // }
    return newMatrix;
} 
//console.log(minesweeper(matrix));
minesweeper(matrix);

