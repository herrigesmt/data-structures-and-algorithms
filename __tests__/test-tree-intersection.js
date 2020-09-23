const treeIntersection = require('../javascript/challenges/treeIntersection/tree-intersection');
let importClasses = require('../data-structures/tree/tree');
let BinaryTree = importClasses.BinaryTree;
let Node = importClasses.Node;

describe('testing tree intersection', () => {
    it('should properly return a set of numbers', () => {
        let tree1 = new BinaryTree(new Node(3));
        tree1.root.left = new Node(4, new Node(2), new Node(6));
        tree1.root.right = new Node(8, new Node(10), new Node(15));
        //        3
        //    4       8
        //  2   6   10    15
        let tree2 = new BinaryTree(new Node(7));
        tree2.root.left = new Node(3, new Node(11), new Node(4));
        tree2.root.right = new Node(5, new Node(20), new Node(21));
        //        7
        //    3       5
        //  11   4   20    21
        const expected = [3, 4]
        const matchingVals = treeIntersection(tree1, tree2);
        expect(matchingVals).toEqual(expect.arrayContaining(expected));
    });
});
