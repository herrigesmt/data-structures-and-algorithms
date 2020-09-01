class Node {
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }

}

class BinaryTree {
    constructor(root = null){
        this.root = root;
    }

    preOrder(){
        const arr = [];
        function _preOrder(root){
            if(root === null){
                return;
            }
            arr.push(root.value);

            _preOrder(root.left);

            _preOrder(root.right);

        }

        _preOrder(this.root);
        return arr;
    }
    inOrder(){
        const arr = [];
        function _inOrder(root){
            if(root === null){
                return;
            }
            _inOrder(root.left);

            arr.push(root.value);

            _inOrder(root.right);

        }

        _inOrder(this.root);
        return arr;
    }

    postOrder(){
        const arr = [];
        function _postOrder(root){
            if(root === null){
                return;
            }
            _postOrder(root.left);

            _postOrder(root.right);

            arr.push(root.value);

        }

        _postOrder(this.root);
        return arr;
    }

    findMaximumValue(){
        if(this.root === null){
            throw new Error('tree is empty');
        }
        let max = Number.NEGATIVE_INFINITY;
        function _findmax(root){
            if(root === null){
                return;
            }
            if(root.value > max){
                max = root.value;
            }
            _findmax(root.left);
            _findmax(root.right);
        }
        _findmax(this.root);
        return max;
    }
}

class BinarySearchTree extends BinaryTree {
    add(value){
        let current = this.root;
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return;
        }
        while(current.left || current.right){
            if(current.value > value){
                if(current.left === null){
                    current.left = newNode;
                } else {
                    current = current.left;
                }
            } else if (current.value < value){
                if(current.right === null){
                    current.right = newNode;
                } else {
                    current = current.right;
                }
            } else if (current.value === value){
                throw new Error('This value already exists in the tree');
            } else {
                throw new Error('Sorry, something went wrong');
            }
        }

    }

    contains(value){
        let currentVal = this.root;
        while(currentVal){
            if(currentVal.value > value){
                currentVal = currentVal.left;
            } else if (currentVal.value < value){
                currentVal = currentVal.right;
            } else if (currentVal.value === value){
                return true;
            }
        }
        return false;
    }
}

module.exports = {
    BinarySearchTree,
    BinaryTree,
    Node,
};
