
class Graph {
    constructor(){
        this.vertices = new Set();
    }
    toString(){
        let strArray = [];
        for( let vertex of this.vertices){
            console.log(' IN THE FOR LOOP ');
            strArray.push(vertex.value);
            strArray.push(' | ');
            for(let edge of vertex.getNeighbors()){
                console.log(edge);
                strArray.push(` ${edge[0]} ${edge[1]},`);
            }
            strArray.push('\n');
        }
        return strArray.join('');
    }

    addNode(str){
        this.vertices.add(new Node(str));
        return this.vertices.size;
    }

    size(){
        return this.vertices.size;
    }
    addEdge(str1, str2, wt){
        let nodeOne = null;
        let nodeTwo = null;
        console.log(this.vertices);
        for(let node of this.vertices){
            console.log(node.value);
            if(node.value === str1){
                nodeOne = node;
            }
            if(node.value === str2){
                nodeTwo = node;
            }
        }
        if(nodeOne === null || nodeTwo === null){
            throw new Error('No such node with one of/both of those values.');
        }
        let edge = new Edge(nodeOne, nodeTwo, wt);
        nodeOne.addEdge(edge);
        nodeTwo.addEdge(edge);
    }
}

class Node {
    constructor(val){
        this.value = val;
        this.neighbors = new Set();
    }
    addEdge(edge){
        this.neighbors.add(edge);
    }
    getNeighbors(){
        let allMyUniqueNeighbors = new Map();
        for(let edge of this.neighbors){
            if(edge.firstNode.value !== this.value){
                allMyUniqueNeighbors.set(edge.firstNode.value, edge.weight);
            }
            if(edge.secondNode.value !== this.value){
                allMyUniqueNeighbors.set(edge.secondNode.value, edge.weight);
            }
        }
        return allMyUniqueNeighbors;
    }

}

class Edge{
    constructor(node1, node2, wt){
        this.firstNode = node1;
        this.secondNode = node2;
        this.weight = wt;
    }
}







