const mergeSort = arr => {
    let n = arr.length;
    if (n === 1) {
        return;
    }
    let mid = Math.floor(n/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    mergeSort(left);
    mergeSort(right);

    merge(left, right, arr);

};

function merge(left, right, arr){
    let index = 0;
    let rightIndex = 0;
    let leftIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length){
        if(right[rightIndex] < left[leftIndex]){
            arr[index] = right[rightIndex];
            rightIndex++;
            index++;
        } else {
            arr[index] = left[leftIndex];
            leftIndex++;
            index++;
        }
    }
    while (leftIndex < left.length){
        arr[index] = left[leftIndex];
        leftIndex++;
        index++;
    }
    while (rightIndex < right.length){
        arr[index] = right[rightIndex];
        rightIndex++;
        index++;
    }
}

module.exports = mergeSort;


/*



merge([4], [23], [4, 23])
mergeSort([8, 4, 23, 42, 16, 15])
Callstack




*/
