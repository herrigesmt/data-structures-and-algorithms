const measureSprinklerWater = require('../javascript/challenges/sprinklerSystem/sprinkler-system');

const { BinaryTree, Node } = require('../data-structures/tree/tree');
describe('testing the water usage of a sprinkler system ', () => {
    it('function should be defined', () => {
        expect(measureSprinklerWater).toBeDefined();
    });
    it('should properly measure the water of a sprinkler node', () => {
        let sprinklerNetwork = new BinaryTree();
        sprinklerNetwork.root = new Node(32);
        sprinklerNetwork.root.left = new Node(55);
        sprinklerNetwork.root.right = new Node(60);
        sprinklerNetwork.root.left.left = new Node(656);
        sprinklerNetwork.root.left.right = new Node(23);
        sprinklerNetwork.root.right.left = new Node(22);
        sprinklerNetwork.root.right.right = new Node(62);
        expect(measureSprinklerWater(sprinklerNetwork.root)).toEqual(910);
    });
    it('should return a proper result when fed a node/sprinkler with no children', () => {
        let sprinklerNetwork = new BinaryTree();
        sprinklerNetwork.root = new Node(23);
        expect(measureSprinklerWater(sprinklerNetwork.root)).toEqual(23);
    });
    it('should throw range error when fed null or undefined', () => {
        expect(() => measureSprinklerWater()).toThrow(RangeError);
    });
    it('should throw type error when fed an invalid node', () => {
        expect(() => measureSprinklerWater({value: 2, left: null})).toThrow(TypeError);
    });
});
