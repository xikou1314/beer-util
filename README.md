beer-util 干杯！！
# 简介
在开发的过程中，抽取了常用的一些常用的方法，构成了该工具库。包含了数组(array)、
日期(date)、函数(fn)、url、数据结构(ds)等模块

# 使用方式
```
npm i beer-util -S

import util from 'beer-util'
```

# API

## array

- all(arr, fn) 数组中的所有元素都满足fn时返回true
- allEqual(arr) 数组中所有元素是否相等
- any(arr, fn) 数组中某些元素满足fn

## date
- dayOfYear(date) 获得距离当前时间已过去多少天
- formatDuration(ms) 传入毫秒时间格式化持续时间
- dateFormat(fmt, date) 传入日期格式和日期对象 获取格式化后的日期时间

## fn
- debounce(fn,delay) 防抖
- throttle(fn,delay) 节流

## url
- parse(url) 将url字符串转化为对象
- parseQuery(url) 将url字符串的query参数转化为对象

## ds

数据结构导出的是一个构造函数，需要实例化后使用。接下来列出各类实例的方法

### stack
- push(element) 向栈中压入一个元素
- pop() 出栈并删除栈顶
- peek() 出栈但不删除栈顶
- length() 返回栈中剩余元素的个数
- clear() 清空栈

### list
- append(element) 向列表中追加一个元素
- find(element) 查找一个元素 找到返回index 找不到返回-1
- remove(element) 移除一个元素 移除成功返回true 失败返回false
- length() 返回list中元素的个数
- toString() 序列化(存在问题待修复)
- insert(element, after) 在after后插入element
- clear() 清空list
- contains(element) 是否包含指定元素
- front() 指针指向表头
- end() 指针指向表尾
- prev() 指针前移
- next() 指针后移
- curPos() 返回指针位置
- moveTo() 移向指定位置
- getELement() 获得当前位置的元素

## queue
- enqueue(delement) 入队
- dequeue() 出队
- front() 队头
- back() 队尾
- toString() 序列化
- empty() 清空

## set
- add(data) 集合中添加数据
- remove(data) 集合移除数据
- show() 展示数据
- contains(data) 判断是否包含数据
- union(set) 求并集
- intersect(set) 求交集
- subset(set) 判断是否是子集
- size() 返回元素的个数
- difference(set) 求补集

## LList 链表
- find(item) 在链表中查找指定元素
- insert(newElement, item) 在item后面插入newElement
- display() 展示链表中的所有元素
- findPrevious(item) 查找指定元素的上一个元素
- remove(item) 移除指定元素

## CLList 循环链表
- find(item) 在链表中查找指定元素
- insert(newElement, item) 在item后面插入newElement
- display() 展示链表中的所有元素
- findPrevious(item) 查找指定元素的上一个元素
- remove(item) 移除指定元素

## DLList 双向链表
- find(item) 在链表中查找指定元素
- insert(newElement, item) 在item后面插入newElement
- display() 展示链表中的所有元素
- findPrevious(item) 查找指定元素的上一个元素
- remove(item) 移除指定元素
- dispReverse() 反向输出链表

## Dictionary
- add(key, value) 添加字典
- find(key) 寻找key对应的值
- remove(key) 移除key对应的值
- showAll() 展示所有的值
- count() 返回所有的值的总数
- clear() 清空字典

## HashTableOpen 开链法处理碰撞
- put(key,data) 放入数据
- get(key) 根据key取出数据

## HashTableSeq 线性法处理碰撞 适用数据量较大
- put(key,data) 放入数据
- get(key) 根据key取出数据

## BST 二叉树
- insert(data) 插入数据
- inOrder() 中序遍历
- preOrder() 先序遍历
- postOrder() 后序遍历
- getMax() 获取最大值
- getMin() 获取最小值
- find(data) 查找data
- removeByMin(data) 移除data 并按最小值重构树
- removeByMax(data) 移除data 并按最大值重构树

## Graph
- addEdge(v,w) 添加边
- showGraph() 展示图中的所有节点
- dfs(v) 从v开始深度优先搜索
- bfs(s) 从s开始广度优先搜索
- pathTo(start,end) 返回从start到end之间的路径
- topSort() 拓扑排序

## Sort 排序
- swap(arr, index1, index2) 交换位置
- bubbleSort(arr) 冒泡排序
- selectionSort(arr) 选择排序
- insertionSort(arr) 插入排序
- shellSort(arr) 希尔排序
- shellSortDynamic(arr) 动态间隔的希尔排序
- mergeSort(arr) 归并排序
- qSort(arr) 快速排序

## Search 搜索
- seqSearch(arr, data) 线性搜索
- seqSearchByData(arr, data) 线性搜索的同时 将经常访问到数据向前移
- binSearch(arr, data) 循环二分搜索
- binarySearchRecusion(arr, data) 递归地二分搜索
- count(arr, data) data出现的次数