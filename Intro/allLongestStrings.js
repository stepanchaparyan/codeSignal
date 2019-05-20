function allLongestStrings(inputArray) {
    let num = 0;
    if (inputArray.length == 1) {
        return inputArray;
    } else {
        for (let i = 0; i < inputArray.length-1; i++) {
            if (inputArray[i].length > inputArray[i+1].length && inputArray[i].length > num) {
                num = inputArray[i].length;            
            } else if (inputArray[i+1].length > inputArray[i].length && inputArray[i+1].length > num) {
                num = inputArray[i+1].length; 
            }
        }

        let newArray = [];
        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i].length == num) {
                newArray.push(inputArray[i]);
            }
        }
        return newArray;
        }
}
let inputArray = ["abak", "hgh", "pppp"];
             
console.log(allLongestStrings(inputArray));