let inputArray = [1000,999];

function avoidObstacles(inputArray) {
    let j = 2;
    for (let i = 0; i < inputArray.length; i++) {
        for (let x = 0; ; x++) {
            if ((inputArray[x] % j) == 0) {
                j++;
                i = 0;
                break;
            }
        }
    }
    return j;
}

console.log(avoidObstacles(inputArray));

// not used but good

// function avoidObstacles(inputArray) {
//     var jump = 2;
//     while (inputArray.some((obstacle) => obstacle % jump == 0)) {
//       jump++;
//     }
//     return jump;
//   }
  