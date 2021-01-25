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
    let result = {
      max: undefined,
      maxIndex: -1
    }
    if (this.queue.length > 0) {
      result.max = this.queue[0]
      result.maxIndex = 0
      for (let i = 1; i < this.queue.length - 1; i++) {
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

function PriorityLinkNode (element, priority) {
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
    node.next = this.head
    this.head = node

    if (node.priority > this.maxPriority.priority) {
      this.maxPriority = node
    }
  }
  this.pop = function() {
    // 删除的时候要找到第二大的节点 并将指针指向
    // 单向链表 需要先找到当前节点的前一个

  }

  this.peek = function() {

  }

  function findPrevious(item) {
    var currNode = this.head;
    while ((currNode.next != null) && (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}

}
