let inputArray = [2,4,1,0];

function arrayMaximalAdjacentDifference(inputArray) {
    let average = 0;
    for (let i = 0; i < inputArray.length; i++) {
       if (inputArray[i] > inputArray[i+1]) {
           if (inputArray[i] - inputArray[i+1] > average) {
                average = inputArray[i] - inputArray[i+1];
           }
       } else {
        if (inputArray[i+1] - inputArray[i] > average) {
           average = inputArray[i+1] - inputArray[i];
        }    
       }
    }
    return average;
}

console.log(arrayMaximalAdjacentDifference(inputArray));

// not used but good example

// function arrayMaximalAdjacentDifference(inputArray) {
//     let maxDiff = 0;
    
//     for (let i = 1; i < inputArray.length; i++) {
//         const currentDiff = Math.abs(inputArray[i - 1] - inputArray[i]);
        
//         if (maxDiff < currentDiff) {
//             maxDiff = currentDiff;
//         }
//     }
    
//     return maxDiff;
// }