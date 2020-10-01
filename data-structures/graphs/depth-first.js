class Graph {

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(startVertex, endVertex, weight = 0) {

        if (!this.adjacencyList.has(startVertex)) {
        // bail and/or throw error
            return;
        }

        if (!this.adjacencyList.has(endVertex)) {
        // bail and/or throw error
            return;
        }

        const adjacencies = this.adjacencyList.get(startVertex);

        const edge = new Edge(endVertex, weight);

        adjacencies.push(edge);
    }

    getNeighbors(vertex) {
        return this.adjacencyList.get(vertex);
    }

}

class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}




const depthFirst = (adj) => {
    let visited = new Set();
    let output = [];
    const _depthFirst = (current) => {
        console.log('current', current);
        if(visited.has(current)){
            return;
        }
        visited.add(current);
        output.push(current);
        let neighbors = adj.get(current);
        console.log('LOOKS PRETTY ITERABLE TO ME',neighbors);
        for(let neighbor of neighbors){
            _depthFirst(neighbor.vertex);
        }
    };
    const list = adj.keys();
    const start = list.next().value;
    _depthFirst(start);
    return output;
};


module.exports = { Graph, Edge, Vertex, depthFirst };
