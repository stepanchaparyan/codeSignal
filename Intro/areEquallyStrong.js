let yourLeft = 10; 
let yourRight = 15; 
let friendsLeft = 15; 
let friendsRight = 101;

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    let friend = [friendsLeft, friendsRight];
    if (friend.includes(yourLeft) && friend.includes(yourRight)) {
        return true;
    } else {
        return false;
    }
}

console.log(areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight));
