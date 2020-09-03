let importClasses = require('../data-structures/tree/tree');
let BinaryTree = importClasses.BinaryTree;
let BinarySearchTree = importClasses.BinarySearchTree;
let Node = importClasses.Node;

describe('binary tree', () => {
    it('should successfully instantiate an empty tree', () => {
        let tree = new BinaryTree();
        expect(tree).toBeDefined();
    });
    it('should successfully instantiate a tree with a single root node', () => {
        let tree = new BinaryTree(new Node('7'));
        expect(tree.root.value).toBe('7');
    });
    it('should successfully add a left child and right child to a single root node', () => {
        let tree = new BinaryTree(new Node('7'));
        tree.root.left = new Node('1');
        tree.root.right = new Node('8');
        expect(tree.root.value).toBe('7');
        expect(tree.root.left.value).toBe('1');
        expect(tree.root.right.value).toBe('8');
    });
    it('should successfully return a collection from a preorder traversal', () => {
        let tree = new BinaryTree(new Node('7'));
        tree.root.left = new Node('1');
        tree.root.right = new Node('8');
        let preOrder = tree.preOrder();
        expect(preOrder[0]).toBe('7');
        expect(preOrder[1]).toBe('1');
        expect(preOrder[2]).toBe('8');

    });
    it('should successfully return a collection from an inorder traversal', () => {
        let tree = new BinaryTree(new Node('7'));
        tree.root.left = new Node('1');
        tree.root.right = new Node('8');
        let inOrder = tree.inOrder();
        expect(inOrder[0]).toBe('1');
        expect(inOrder[1]).toBe('7');
        expect(inOrder[2]).toBe('8');
    });
    it('should successfully return a collection from an postorder traversal', () => {
        let tree = new BinaryTree(new Node('7'));
        tree.root.left = new Node('1');
        tree.root.right = new Node('8');
        let postOrder = tree.postOrder();
        expect(postOrder[0]).toBe('1');
        expect(postOrder[1]).toBe('8');
        expect(postOrder[2]).toBe('7');
    });
    it('should successfully find the max value of a binary tree', () => {
        let tree = new BinaryTree(new Node(7));
        tree.root.left = new Node(1, new Node(4), new Node(12));
        tree.root.right = new Node(2, new Node(9), new Node(13));
        //        7
        //    1       2
        //  4   12  6   13
        expect(tree.findMaximumValue()).toBe(13);
    });
    it('should throw error when running findMaxiumumValue on an empty tree', () => {
        let tree = new BinaryTree();
        expect(() => tree.findMaximumValue()).toThrow(Error);
        expect(() => tree.findMaximumValue()).toThrow('tree is empty');
    });
    it('should properly fizzbuzztree when runnign fizzbuzztree on a tree', () => {
        let tree = new BinaryTree(new Node(3));
        tree.root.left = new Node(4, new Node(2), new Node(6));
        tree.root.right = new Node(8, new Node(10), new Node(15));
        //        3
        //    4       8
        //  2   6   10    15
        tree.fizzBuzzTree();
        let treePreOrder = tree.preOrder();
        expect(treePreOrder[0]).toEqual('Fizz');
        expect(treePreOrder[1]).toEqual('4');
        expect(treePreOrder[2]).toEqual('2');
        expect(treePreOrder[3]).toEqual('Fizz');
        expect(treePreOrder[4]).toEqual('8');
        expect(treePreOrder[5]).toEqual('Buzz');
        expect(treePreOrder[6]).toEqual('FizzBuzz');
    });
    it('should return an error when running fizzbuzztree on empty tree', () => {
        let tree = new BinaryTree();
        expect(() => tree.fizzBuzzTree()).toThrow(Error);
        expect(() => tree.fizzBuzzTree()).toThrow('cannot fizzBuzzTree on empty tree');
    });
    it('should properly return an array representing the value of the tree in order when calling breadthFirstTraversal', () => {
        let tree = new BinaryTree(new Node(3));
        tree.root.left = new Node(4, new Node(2), new Node(6));
        tree.root.right = new Node(8, new Node(10), new Node(15));
        //        3
        //    4       8
        //  2   6   10    15
        let breadthVals = tree.breadthFirstTraversal();
        expect(breadthVals[0]).toEqual(3);
        expect(breadthVals[1]).toEqual(4);
        expect(breadthVals[2]).toEqual(8);
        expect(breadthVals[3]).toEqual(2);
        expect(breadthVals[4]).toEqual(6);
        expect(breadthVals[5]).toEqual(10);
        expect(breadthVals[6]).toEqual(15);
    });
    it('should return an empty array if you call breadthFirstTraversal on an empty tree', () => {
        let tree = new BinaryTree();
        let breadthVals = tree.breadthFirstTraversal();
        expect(breadthVals.length).toEqual(0);
    });
});

