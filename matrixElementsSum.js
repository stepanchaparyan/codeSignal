function matrixElementsSum(matrix) {
    for (let i = 0; i < matrix.length-1; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0) {
                matrix[i+1][j] = 0;
            }
        }    
    }

    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i].reduce((a,b) => a + b);
    }
    return sum;
}

let matrix = [[1, 1, 1, 0], 
             [0, 5, 0, 1], 
             [2, 1, 3, 10]]
             
console.log(matrixElementsSum(matrix));