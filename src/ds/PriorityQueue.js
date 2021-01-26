import { Stack } from './stack'

// 优先队列的操作
// 插入：在优先队列中插入元素，并使队列“有序”
// 删除最大/最小值：删除并返回最大/最小的元素，并使队列“有序”
// 查找最大/最小关键字：查找最大/最小的值


// 实现 插入 删除 查找最大/最小关键字
// 数组	1	n	n
// 链表	1	n	1
// 有序数组	n 或 logn	n	1
// 有序链表	n	1	1
// 二叉搜索树	logn	logn	logn
// 二叉堆	logn	logn	1


// 1.入队 q.push();

// 2.出队 q.pop();

// 3.获取最大的数 q.peek()

// 数组实现优先队列

function ArrayPriorityQueue() {
  this.queue = new Array()
  // 入队
  this.push = function (num) {
    this.queue.push(num)
  }
  // 出队 最大的出队
  this.pop = function () {
    const maxData = findMaxAndIndex()
    if (maxData.maxIndex > -1) {
      this.queue.splice(maxData.maxIndex, 1)
    }
    return maxData.max
  }

  this.peek = function () {
    const maxData = findMaxAndIndex()
    return maxData.max
  }


  function findMaxAndIndex() {
    var result = {
      max: undefined,
      maxIndex: -1
    }
    if (this.queue.length > 0) {
      result.max = this.queue[0]
      result.maxIndex = 0
      for (var i = 1; i < this.queue.length - 1; i++) {
        if (result.max < this.queue[i]) {
          result.max = this.queue[i]
          result.maxIndex = i
        }
      }
    }

    return result
  }

}

// 链表实现优先队列

function PriorityLinkNode(element, priority) {
  this.element = element
  this.priority = priority
  this.next = null
}

function PriorityLink() {
  this.head = new PriorityLinkNode('head', -1)

  // 指向最大权重处
  this.maxPriority = this.head

  this.push = function (node) {
    // 直接插入一个就可以了
    const next = this.head.next
    node.next = next
    this.head.next = node

    if (node.priority > this.maxPriority.priority) {
      this.maxPriority = node
    }
  }
  this.pop = function () {
    // 删除的时候要找到第二大的节点 并将指针指向
    // 单向链表 需要先找到当前节点的前一个
    var previous = findPrevious(this.maxPriority.element)
    const result = this.maxPriority
    previous.next = this.maxPriority.next
    this.maxPriority = findMax()
    return result

  }

  this.peek = function () {
    return this.maxPriority
  }

  function findPrevious(item) {
    var currNode = this.head;
    while ((currNode.next != null) && (currNode.next.element != item)) {
      currNode = currNode.next;
    }
    return currNode;
  }

  function findMax() {
    var currentNode = this.head
    var maxPriority = this.head
    while (currentNode != null) {
      if (currentNode.priority > maxPriority.priority) {
        maxPriority = currentNode
      }
      currentNode = currentNode.next
    }
    return maxPriority
  }
}

// 有序数组实现优先队列
function SortedPriorityQueue() {
  this.queue = new Array()
  // 入队
  this.push = function (num) {
    // this.queue.push(num)

    // 有序数组用二分法查找插入位置

    const insertIndex = findInsertIndex(num)
    this.queue.splice(insertIndex, 0, num)

  }
  // 出队 最大的出队
  this.pop = function () {
    return this.queue.splice(-1, 1)
  }

  this.peek = function () {
    return this.queue[this.queue.length - 1]
  }

  function findInsertIndex(data) {
    var lowwerBound = 0
    var upperBound = this.queue.length - 1

    while (lowwerBound <= upperBound) {
      var mid = Math.floor((lowwerBound + upperBound) / 2)
      if (data < this.queue[mid]) {
        upperBound = mid - 1
      } else if (data > this.queue[mid]) {
        lowwerBound = mid + 1
      } else {

        return mid
      }
    }
    return lowwerBound
  }

}

// 有序链表实现优先队列

function SortedPriorityLinkNode(element, priority) {
  this.element = element
  this.priority = priority
  this.next = null
}

function SortedPriorityLink() {
  this.head = new SortedPriorityLinkNode('head', -1)

  // 指向最大权重处
  this.maxPriority = this.head

  this.push = function (node) {
    // 根据权重寻找插入位置
    var insertPlace = findInsertPlace(node)
    node.next = insertPlace.next
    insertPlace.next = node
  }
  this.pop = function () {
    // 直接取最前面的一个并断开
    var result = this.head.next
    this.head = this.head.next
    return result
  }

  this.peek = function () {
    // 直接取最前面的一个
    return this.head.next
  }

  function findInsertPlace(item) {
    var currNode = this.head.next
    if (currNode) {
      while (currNode.next !== null && currNode.priority >= item.priority && currNode.next.priority >= item.priority) {
        currNode = currNode.next
      }
    }
    return currNode
  }

}

// 二叉搜索数实现优先队列

function Node(data, left, right) {
  this.data = data
  this.left = left
  this.right = right
  this.show = show
  function show() {
    return this.data
  }
}

function PriorityTree() {
  this.root = null

  // 插入
  this.insert = function (data) {

    var node = new Node(data, null, null)

    if (this.root = null) {
      this.root = node
    } else {
      var current = this.root
      var parent
      while (true) {
        parent = current
        if (data < current.data) {
          current = current.left
          if (current == null) {
            parent.left = node
            break
          }
        } else {
          current = current.right
          if (current == null) {
            parent.right = node
            break
          }
        }
      }
    }

  }

  // 先序遍历
  this.preOrder = function() {
    var stack = new Stack()
    
  }




  // 删除  最大/最小
  // 获取最大值 
  // 获取最小值

  // 中序遍历

  // 后序遍历

  // 层序遍历

}

