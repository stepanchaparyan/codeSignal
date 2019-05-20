let image = [[36,0,18,9], 
             [27,54,9,0], 
             [81,63,72,45]];
image = [[7, 4, 0, 1], 
        [5, 6, 2, 2], 
        [6, 10, 7, 8], 
        [1, 4, 2, 0]];

image = [[36,0,18,9,9,45,27], 
        [27,0,54,9,0,63,90], 
        [81,63,72,45,18,27,0], 
        [0,0,9,81,27,18,45], 
        [45,45,27,27,90,81,72], 
        [45,18,9,0,9,18,45], 
        [27,81,36,63,63,72,81]];

function getNeighborsSum(image,ii,jj) {
    let sum = 0;
    for (let i = (ii-1); i < (ii + 2); i++) {
        for (let j = (jj-1); j < (jj + 2); j++) {
            sum += image[i][j];
        }
    }
    return Math.floor(sum/9);
}

function boxBlur(image) {
    let result = [];
    let newImage = [];
    for (let i = 1; i < image.length-1; i++) {        
        for (let j = 1; j < image[0].length-1; j++) {
            num = image[i][j];
            newImage.push(getNeighborsSum(image,i,j));            
        }
        result.push(newImage);
        newImage = [];
    }
    return result;
} 
console.log(boxBlur(image));
