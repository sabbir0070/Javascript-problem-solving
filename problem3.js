
function sortMaker(arr) {
    if (arr.length !== 2) {
        return "Array must have exactly 2 elements.";
    }
    
    if (arr[0] > 0 && arr[1] > 0) {
        if (arr[0] === arr[1]) {
            return "equal";
        } else {
            return [Math.max(...arr), Math.min(...arr)];
        }
    } else {
        return "Invalid Input";
    }
}

const arr = [3,20]; 
const result = sortMaker(arr);
console.log(result);



