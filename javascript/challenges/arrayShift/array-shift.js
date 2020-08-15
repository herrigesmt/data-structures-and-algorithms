function insertShiftArray(arr, ctrVal){
    let revArray = arr.slice(); // in case we want to preserve the original array we are feeding in
    let ctrIndex = Math.ceil(revArray.length / 2);
    revArray.splice(ctrIndex, 0, ctrVal);
    return revArray;
}

module.exports = insertShiftArray;
