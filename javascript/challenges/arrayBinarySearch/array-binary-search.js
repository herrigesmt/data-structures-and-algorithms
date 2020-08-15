function binSearch(arr, val, min, max){
    if(min === undefined) { min = 0};
    if(max === undefined) { max = arr.length - 1};
    let midInd = Math.ceil(((max - min)/2) + min);
    if(arr.includes(val) === false){
        return -1;
    } else if (arr[midInd] === val) {
        return midInd;
    } else if (arr[midInd] > val) {
        return binSearch(arr, val, min, midInd -1);
    } else if (arr[midInd] < val) {
        return binSearch(arr, val, midInd +1, max);
    }
}
// 0. arr, val, 0, 9
// midInd = 5
// 1. arr, val 0, 4
// midInd = 2
// 2. arr, val, 3, 4
// midInd = 3
module.exports = binSearch;
