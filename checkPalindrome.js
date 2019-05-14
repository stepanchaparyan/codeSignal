function checkPalindrome(inputString) {
    let list = [];
    let size = inputString.length;
    for (let i = 0; i < size/2; i++) {
        if (inputString[i] === inputString[(size-1)-i]) {
            list.push(true);
        } else {
            list.push(false);
        }
    }
    return list.every(item => item == true);    
}

console.log(checkPalindrome('daslklsa'));
 