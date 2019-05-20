function isMonotonous(sequence) {
    let list = [];
    let list2 = [];
    if (sequence.length === 0 || sequence.length === 1) {
        return true;
    } else {
        for (let i = 0; i < sequence.length; i++) {
            if (sequence[i] < sequence[i+1]) {
                list.push(true);
            }
        }
        for (let i = 0; i < sequence.length; i++) {
            if (sequence[i] > sequence[i+1]) {
                list2.push(true);
            }
        }
        if (list.length == sequence.length-1 || list2.length == sequence.length-1) {
             return true;
        } else {
            return false;
        }
    }
}

console.log(isMonotonous([10, 9, 8, 7, 4]));
 