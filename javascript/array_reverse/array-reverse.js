function reverseArray(arr){
    let reverseArray = [];
    for(let i = 1; i <= arr.length; i++){
        reverseArray.push(arr[arr.length - i])
    }
    return reverseArray;
}