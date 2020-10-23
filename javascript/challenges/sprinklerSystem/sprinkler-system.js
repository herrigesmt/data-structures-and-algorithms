const measureSprinklerWater = (node) => {
    if(!node){
        throw new RangeError();
    }
    if(!node.value === undefined || !node.left === undefined || !node.right === undefined){
        throw new TypeError();
    }
    let water = 0;
    const _measureSprinklerWater = (root) => {
        if(root === null){
            return;
        }
        water += root.value;
        _measureSprinklerWater(root.left);
        _measureSprinklerWater(root.right);
    };

    _measureSprinklerWater(node);

    return water;
};

module.exports = measureSprinklerWater;
