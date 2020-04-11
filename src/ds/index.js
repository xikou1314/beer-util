// 算法和数据结构

var BST = require('./BST');
var circleLinkedList = require('./circleLinkedList');
var dictionary = require('./dictionary');
var doubleLinkedList = require('./doubleLinkedList');
var Graph = require('./Graph');
var hashTableOpen = require('./hashTableOpen');
var hashTableSeq = require('./hashTableSeq');
var linkedList = require('./linkedList');
var list = require('./list');
var queue = require('./queue');
var search = require('./search');
var set = require('./set');
var sort = require('./sort');
var stack = require('./stack');

module.exports = {
  ...BST,
  ...circleLinkedList,
  ...dictionary,
  ...doubleLinkedList,
  ...Graph,
  ...hashTableOpen,
  ...hashTableSeq,
  ...linkedList,
  ...list,
  ...queue,
  ...search,
  ...set,
  ...sort,
  ...stack,
};