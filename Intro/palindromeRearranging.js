let inputString = 'afbbccfdd';

function isOdd(num) { return num % 2;}

function palindromeRearranging(inputString) {
    let count = '';
    let char = '';
    let result = true;
    let oddCount = 0;
    for (let i = 0; i < inputString.length; i++) {
        char = inputString[i];
        count = (inputString.match(new RegExp(char, 'g')) || []).length;
        if (isOdd(count)) {
            oddCount++;
        }
    }
    if (oddCount > 1 ) {
        result = false;
    }
    return result;    
}

console.log(palindromeRearranging(inputString));
