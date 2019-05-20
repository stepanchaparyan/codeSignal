let n = 2468463; 

function isEven(n) { return n % 2 == 0; }
 
function evenDigitsOnly(n) {
    n = String(n);
    let list = [];
    for (let i = 0; i < n.length; i++) {
        list.push(n[i]);          
    }
    return list.every(isEven);
}

console.log(evenDigitsOnly(n));

