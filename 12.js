// 二叉查找树
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
    
    function show() {
        return this.data;
    }
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMax = getMax;
    this.getMin = getMin;
    this.find = find;
    this.removeByMin = removeByMin;
    this.removeByMax = removeByMax;
    
    function insert(data) {
        var n = new Node(data, null, null);
        // 若为一颗空树 该节点作为根节点
        if(this.root == null) {
            this.root = n;
        } else {
            // 从根节点出发寻找合适的节点
            var current = this.root;
            // 保存父节点
            var parent;
            while(true) {
                parent = current;
                // 如果要存储的数据小于当前节点
                if (data < current.data) {
                    // 将当前节点移动到左子树上
                    current = current.left;
                    // 如果左子树为空 表示这里可以存放数据
                    if(current == null) {
                        // 将数据存放左边
                        parent.left = n;
                        break;
                    }
                } else {
                    // 大于当前节点
                    current = current.right;
                    if(current == null) {
                        // 为空表示可以存放
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }

    function inOrder(node) {
        if(!(node == null)) {
            inOrder(node.left);
            console.log(node.show() + " ");
            inOrder(node.right);
        }
    }

    function preOrder(node) {
        if(node !=null) {
            console.log(node.show() + " ");
            preOrder(node.left);
            preOrder(node.right);
        }
    }
    
    function postOrder (node) {
        if(node != null) {
            postOrder(node.left);
            postOrder(node.right);
            console.log(node.show() + " ");
        }
    }

    function getMin() {
        var current = this.root;
        while (current.left != null) {
            current = current.left;
        }
        return current.data;
    }
    
    function getMax() {
        var  current = this.root;
        while (current.right != null) {
            current = current.right;
        }
        return current.data;
    }

    function find(data) {
        var  current = this.root;
        while(current != null) {
            if (current.data == data) {
                return current;
            } else if (data < current.data) {
                current = current.left
            } else {
                current = current.right;
            }
        }
        return null
    }

    function removeByMin(data) {
        this.root = removeNodeByMin(this.root, data);
    }

    function removeNodeByMin(node, data) {
        if (node == null) {
            return null;
        }
        if (data == node.data) {
            // 没有子节点的节点
            if (node.left == null && node.right == null) {
                return null;
            }
            // 没有左子节点的节点
            if (node.left == null) {
                return node.right;
            }
            // 没有右子节点的节点
            if (node.right == null) {
                return node.left;
            }
            // 有两个子节点的节点
            var tempNode = getSmallet(node.right);
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data);
            return node;
        } else if (data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
        } else {
            node.right = removeNode(node.right, data);
            return node;
        }
    }

    function removeByMax(data) {
        this.root = removeNodeByMax(this.root, data);
    }

    function removeNodeByMax(node, data) {
        if(node == null) {
            return null;
        }

        if(data == node.data) {
            if (node.left == null && node.right == null) {
                return null;
            }

            if (node.left == null) {
                return node.right;
            }

            if (node.right == null) {
                return node.left;
            }

            var tempNode = getMaximum(node, data);
            node.data = tempNode.data;
            node.left = removeNodeByMax(node.left, tempNode.data);
            return node;
        } else if (data < node.data) {
            node.left = removeNodeByMax(node.left, data);
            return node;
        } else {
            node.right = removeNodeByMax(node.right, data);
            return node;
        }
    }

    function getSmallet(node) {
        var current = node;
        while (current.left != null) {
            current = current.left;
        }
        return current.data;
    }
    
    function getMaximum(node) {
        var  current = node;
        while (current.right != null) {
            current = current.right;
        }
        return current.data;
    }
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Preorder traversal:");
nums.preOrder(nums.root);
var min  = nums.getMin();
console.log('min:');
console.log(min);
var max = nums.getMax();
console.log('max');
console.log(max);

nums.removeByMax(22);
console.log("Preorder traversal:");
nums.preOrder(nums.root);