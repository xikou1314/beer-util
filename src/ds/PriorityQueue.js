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

// 3.求队列中元素个数 q.size();

// 4.判断度列是否为空 q.empty();若为空返回true，否则返回false

// 5.获得首元素 q.top();

// 6.返回q的第一个元素  q.top();

// 7.返回q的末尾元素 q.back();

// 数组实现优先队列

function ArrayPriorityQueue() {
  this.queue = new Array()

  
}

