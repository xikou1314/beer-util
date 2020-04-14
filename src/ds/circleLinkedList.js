// 循环链表
function CNode(element) {
    this.element = element;
    this.next = null;
}

function CLList() {
    this.head = new CNode("head");
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;

    function find(item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    function insert(newElement, item) {
        var newNode = new CNode(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }
    function display() {
        var result = [];
        var currNode = this.head;
        while(currNode.next != null && currNode.next.element != "head") {
            result.push(currNode.next.element);
            currNode = currNode.next;
        }
        return result;
    }
    function findPrevious(item) {
        var currNode = this.head;
        while ((currNode.next != null) && (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    }
    function remove(item) {
        var prevNode = this.findPrevious(item);
        if(prevNode.next != null) {
            prevNode.next = prevNode.next.next;
            return true;
        }
        return false;
    }
}

module.exports = {
    CNode,
    CLList
};