function getEdges(graph, arr){
    let cities = graph.vertices.entries();
    let origin;
    let counter = 0;
    while(origin !== arr[0] && counter < graph.vertices.size){
        let start = cities.next().value.value;
        if(arr[0] === start){
            origin = start;
        }
        counter++;
    }
    if(!origin){
        return false;
    }
    let pointer = 1;
    let price = 0;
    while(pointer < arr.length -1){
        for(let edge of origin.neighbors){
            if(edge.firstNode.value !== origin.value && edge.firstNode.value === arr[pointer]){
                origin = edge.firstNode;
                pointer++;
                price += edge.wt;
            }
            if(edge.secondNode.value !== origin.value && edge.secondNode.value === arr[pointer]){
                origin = edge.secondNode;
                pointer++;
                price += edge.wt;
            }
        }
        if(origin === arr[pointer]){
            return false;
        }
    }
    
    return { bool:true, price };
}
