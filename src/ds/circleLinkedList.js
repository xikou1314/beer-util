// 循环链表
function CNode(element) {
    this.element = element;
    this.next = null;
}

function CLList() {
    this.head = new Node("head");
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
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }
    function display() {
        var currNode = this.head;
        while(currNode.next != null && currNode.next.element != "head") {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
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
        if(pervNode.next != null) {
            pervNode.next = prevNode.next.next;
        }
    }
}

module.exports = {
    CNode,
    CLList
};