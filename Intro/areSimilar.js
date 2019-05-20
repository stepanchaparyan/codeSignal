let a = [2,1,3];
let b = [1,2,3];

function areSimilar(a,b) {
    let test = false;
    let list = [];
    let sumA = 0;
    let sumB = 0;
    if (a.length !== 0 || b.length !== 0) {
        sumA = a.reduce((item, sum) => item + sum);
        sumB = b.reduce((item, sum) => item + sum);
    } else {
        test = true;
    }

    if (sumA === sumB) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                list.push(i);
            }
        }
    
        if (list.length === 0) {
            test = true;
        }
        if (list.length === 2 && a[list[0]] === b[list[1]]) {
            test = true;
        }
    }
    return test;
}

console.log(areSimilar(a,b));
