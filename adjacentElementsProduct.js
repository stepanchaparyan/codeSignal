function adjacentElementsProduct(inputArray) {
    let list = [];
    let size = inputArray.length;
    for (let i = 0; i < size-1; i++) {
        list.push(inputArray[i]*inputArray[i+1]);
    }
    return Math.max(...list);    
}

console.log(adjacentElementsProduct([5,8,-8,-2,9,5,-5,5,0,5]));