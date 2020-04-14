// 双向链表
function DNode(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function DLList() {
    this.head = new DNode("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findLast = findLast;
    this.dispReverse = dispReverse;

    function dispReverse() {
        var result = [];
        var currNode = this.head;
        currNode = this.findLast();
        while(currNode.previous != null) {
            result.push(currNode.element);
            currNode = currNode.previous;
        }
        return result;
    }

    function findLast() {
        var currNode = this.head;
        while(currNode.next != null) {
            currNode = currNode.next;
        }
        return currNode;
    }

    function remove(item) {
        var currNode = this.find(item);
        if (currNode.next != null) {
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null;
            return true;
        } else {
            currNode.previous.next = null;
            currNode.previous = null;
            return true;
        }
        return false;
    }

    function display() {
        var result = [];
        var currNode = this.head;
        while(currNode.next != null) {
            result.push(currNode.next.element);
            currNode = currNode.next;
        }
        return result;
    }

    function find(item) {
        var currNode = this.head;
        while(currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    function insert(newElement, item) {
        var newNode = new DNode(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    }
}


module.exports = {
    DNode,
    DLList
};

