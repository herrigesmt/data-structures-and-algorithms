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

    function merge(left, right, arr){
        let index = 0;
        while(left.length && right.length){
            if(right[0] < left[0]){
                arr[index] = right.shift();
            } else {
                arr[index] = left.shift();
            }
            index++;
        }
        while (left.length){
            arr[index] = left.shift();
            index++;
        }
        while (left.length){
            arr[index] = right.shift();
            index++;
        }
    }
};

module.exports = mergeSort;


/*



merge([4], [23], [4, 23])
mergeSort([8, 4, 23, 42, 16, 15])
Callstack




*/
