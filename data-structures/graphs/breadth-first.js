let {Queue} = require('../stacksAndQueues/stacks-and-queues');

const breadthFirst = (node) => {
    let nodes = new Set();
    let breadth = new Queue();
    let visited = {};
    breadth.enqueue(node);
    while(!breadth.isEmpty()){
        let front = breadth.dequeue();
        nodes.add(front);

        for(let child in front.getNeighbors()){
            if(!visited[child.value]){
                visited[child.value] = true;
                breadth.enqueue(child);
            }
        }
    }
};

module.exports = breadthFirst;
