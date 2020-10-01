const { Graph, Edge, Vertex, depthFirst } = require('../data-structures/graphs/depth-first');

describe('testing depth first traversal for graphs', () => {
    it('should ', () => {
        const graph = new Graph();

        const A = new Vertex('A');
        const B = new Vertex('B');
        const C = new Vertex('C');
        const D = new Vertex('D');
        const E = new Vertex('E');
        const F = new Vertex('F');
        const G = new Vertex('G');
        const H = new Vertex('H');

        graph.addVertex(A);
        graph.addVertex(B);
        graph.addVertex(C);
        graph.addVertex(D);
        graph.addVertex(E);
        graph.addVertex(F);
        graph.addVertex(G);
        graph.addVertex(H);

        graph.addEdge(A, B);
        graph.addEdge(A, D);
        graph.addEdge(B, D);
        graph.addEdge(B, C);
        graph.addEdge(C, G);
        graph.addEdge(D, E);
        graph.addEdge(D, F);
        graph.addEdge(D, H);
        graph.addEdge(F, H);
        const result = depthFirst(graph.adjacencyList);
        console.log(result);
    });
});
