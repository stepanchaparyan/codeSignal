let picture = ["a"]

function addBorder(picture) {
    let list = [];
    let a = '*';
    let len = picture.length;
    let textLen = picture[0].length;
    let line = '*';
    let line2 = '';
    for (let i = 0; i < textLen + 1; i++) {
        line += a;
    }
    list.push(line);
    for (let i = 0; i < len; i++) {
        line2 = a + picture[i] + a;
        list.push(line2);
    }
    list.push(line);  
    return list;
}

console.log(addBorder(picture));
