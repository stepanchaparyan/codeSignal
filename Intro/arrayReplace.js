let inputArray = [1, 2, 1]; 
let elemToReplace = 1;
let substitutionElem = 3;

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    for (let i = 0; i < inputArray.length; i++) {        
        if (inputArray[i] === elemToReplace) {
            inputArray[i] = substitutionElem;
        }           
    }
    return inputArray;
}

console.log(arrayReplace(inputArray, elemToReplace, substitutionElem));

