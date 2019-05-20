function sortNumbers (points) {    
    return points.sort((a, b) => a-b);
}

let a = [160, 210, 200,-1]

function sortByHeight(a) {
    console.log(a);
    let list = a.filter(item => item > 0);
    list = sortNumbers(list);
    let finalList = [];
    let j = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === -1) {
            finalList.push(-1);           
        } else {
            finalList.push(list[j]);
            j++;
        }
    }    
    return finalList;
}

console.log(sortByHeight(a));
