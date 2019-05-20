let inputArray = [1,1,1]

function arrayChange(inputArray) {
    let counter = 0;
    for (let i = 0; i < inputArray.length; i++) {
        while (inputArray[i] >= inputArray[i+1]) {
            inputArray[i+1] += 1;           
            counter++;
        }
    }    
    return counter;
}

console.log(arrayChange(inputArray));


// solution from other 
// function arrayChange(series) {
//     var moves = 0;
    
//     for (var i = 1; i < series.length; i++) {
//         if (series[i] <= series[i - 1]) {
//             diff = series[i - 1] - series[i] + 1;
//             series[i] += diff;
//             moves += diff;
//         }
//     }
    
//     return moves;
// }