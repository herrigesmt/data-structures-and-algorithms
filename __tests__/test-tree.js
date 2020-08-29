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
});

