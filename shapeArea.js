function getSum (n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum += i; 
    }
    return sum;
};

function shapeArea(n) {    
    return getSum(n) * 4 + 1;
}

