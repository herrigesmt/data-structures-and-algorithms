const printAdjList = (adjList) => {
    let string = '';
    if(adjList.length < 2){
        throw new RangeError();
    }
    let legend = adjList[0];
    for(let array = 1; array < adjList.length; array++){
        string+= `${legend[array - 1]}| `;
        for(let index = 0; index < adjList[array].length; index++){
            if(adjList[array][index] === 1){
                string += `-> ${legend[index]} `;
            }
        }
        string += '\n';
    }
    return string;
};

module.exports = printAdjList;
