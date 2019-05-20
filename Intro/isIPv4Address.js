let inputArray = 'a0.155.10.10';

function isIPv4Address(inputArray) {
    let list = inputArray.split('.');
    let result = true;
    if (list.length !== 4) {
        result = false;
    }
    for (let i = 0; i < 4; i++) {
        if (list[i] < 0 || list[i] > 255 || isNaN(list[i]) || list[i] !== '') {
            result = false;
        }
    }
    return result;
}

console.log(isIPv4Address(inputArray));
