function isSequence (array) {
    return array.every((num, i) => i === array.length - 1 || num < array[i + 1]);
}

function spliceAndCheck(i, sequence) {
    sequence.splice(i,1);
    return isSequence(sequence);
}

function almostIncreasingSequence(sequence) {
    let newArray;
    let list = [];
    for (let i = 0; i < sequence.length; i++) {    
        newArray = Object.assign([],sequence);    
        //newArray = [...sequence];
        list.push(spliceAndCheck(i, newArray));    
    }
    return list.some(item => item == true);
}

console.log(almostIncreasingSequence([1000, 1000, 2000, 3000, 4000, 5000, 5000]));


// function almostIncreasingSequence(seq) {
//     var bad=0
//     for(var i=1;i<seq.length;i++) if(seq[i]<=seq[i-1]) {
//       bad++
//       if(bad>1) return false
//       if(seq[i]<=seq[i-2]&&seq[i+1]<=seq[i-1]) return false
//     }
//     return true
//   }