function addTwoDigits(n) {
    n = n.toString();
    let sum = 0;
    let splitStr = n.split('');
    
    for (let i = 0; i < splitStr.length; i++) {
        sum += Number(splitStr[i]);
    }
    
    return sum;
}


console.log(addTwoDigits(29));