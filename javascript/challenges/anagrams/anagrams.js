const isAnagram = (str1, str2) => {
    let str1object = {};
    let str2object = {};
    for(let character of str1){
        if(character !== ' ' && character !== '.' && character !== ','){ // etc.
            if(str1object[character]){
                str1object[character]++;
            } else {
                str1object[character] = 1;
            }
        }
    }
    for(let character of str2){
        if(character !== ' ' && character !== '.' && character !== ','){ // etc.
            if(str2object[character]){
                str2object[character]++;
            } else {
                str2object[character] = 1;
            }
        }
    }
    console.log(str1object);
    console.log(str2object);
    for(let character in str1object){
        console.log(`str2object.${character}`,str2object[character]);
        if(str2object[character] === undefined){
            return false;
        } else {
            if(str2object[character] !== str1object[character]){
                return false;
            }
        }
    }
    for(let character in str2object){
        console.log(`str1object.${character}`,str1object[character]);
        if(str1object[character] === undefined){
            return false;
        } else {
            if(str1object[character] !== str2object[character]){
                return false;
            }
        }
    }
    return true;
};

module.exports = isAnagram;
