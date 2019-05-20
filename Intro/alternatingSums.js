function alternatingSums(a) {
    let evens = 0;
    let odds = 0;
    let result = [];
    for (var i = 0; i < a.length; i++) {
        if ((i % 2) != 1) {
            evens += a[i];
        } else {
            odds += a[i];
        }
    }
    result.push(evens);
    result.push(odds);
    return result;
}

let a = [100, 50, 60, 40];

console.log(alternatingSums(a));


