function swap (items, leftIndex, rightIndex){
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function quickSort(items, leftIndex, rightIndex){
    let pivot;
    if(items.length > 1){
        pivot = partition(items, leftIndex, rightIndex);

        if(leftIndex < pivot - 1) {
            quickSort(items, leftIndex, pivot - 1);
        }
        if(pivot < rightIndex) {
            quickSort(items, pivot, rightIndex);
        }

    }

    return items;
}

function partition(items, left, right){
    let pivot = items[Math.floor((right + left) /2)];
    let l = left;
    let r = right;
    while(l <= r){
        while(items[l] < pivot){
            l++;
        }
        while(items[r] > pivot){
            r--;
        }
        if(l<=r){
            swap(items, l, r);
            l++;
            r--;
        }
    }
    return l;
}

module.exports = quickSort;
