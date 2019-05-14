function isLucky(n) {
    let str = n.toString();
    let list = str.split('');
    let first = list.splice(0,list.length/2);
    let second = list.splice(list.length/2-1);
    first = first.reduce((a,b) => Number(a) + Number(b));
    second = second.reduce((a,b) => Number(a) + Number(b));
    return (first === second ? true : false);
}

console.log(isLucky(422342));
 