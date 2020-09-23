function treeIntersection(tree1, tree2) {
    if(!(tree1.root && tree2.root)){
        return [];
    }
    const compArray = [];
    function createCompareArray(root){
        if(root === null){
            return;
        }
        compArray.push(root.value);
        createCompareArray(root.left);
        createCompareArray(root.right);
    }
    createCompareArray(tree1.root);
    const resultArr = [];
    function compareSecondTree(root) {
        if(root === null){
            return;
        }
        if(compArray.includes(root.value)){
            resultArr.push(root.value);
        }
        compareSecondTree(root.left);
        compareSecondTree(root.right);
    }
    compareSecondTree(tree2.root);

    return resultArr;
}

module.exports = treeIntersection;
