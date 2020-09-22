function repeatedWords(str){

    function hash(key){
        let sum = 0;
        for(let char of key) {
            sum += char.charCodeAt(0);
        }
        const primed = sum * 599;
        const index = primed % 512;

        return index;
    }
    let wordsArray = str.toLowerCase().split(/\W+/g);
    let hashTable = new Array(512);
    console.log(wordsArray);
    for(let word of wordsArray){
        console.log(word);
        let index = hash(word);
        if(hashTable[index]){
            for(let k in hashTable[index]){
                if(hashTable[index][k] === word){
                    return word;
                }
            }
            hashTable[index].push(word);
        } else {
            hashTable[index] = [word];
        }
    }
    return undefined;

}

module.exports = repeatedWords;
