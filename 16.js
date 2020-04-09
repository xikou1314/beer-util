function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;
    this.insertionSort = insertionSort;
    this.gaps = [5,3,1];
    this.shellSort = shellSort;

    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }

    function setData() {
        for (var i = 0; i < this.numElements; ++i) {
            this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
        }
    }

    function clear() {
        for (var i = 0; i < this.dataStore.length; ++i) {
            this.dataStore[i] = 0;
        }
    }

    function insert(element) {
        this.dataStore[this.pos++] = element;
    }

    function toString() {
        var retstr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retstr += this.dataStore[i] + " ";
            if (i > 0 && i % 10 == 0) {
                retstr += '\n';
            }
        }
        return retstr;
    }

    function swap(arr, index1, index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    // 冒泡排序
    function bubbleSort() {
        var numElements = this.dataStore.length;
        for (var outer = numElements; outer >= 2; --outer) {
            for (var inner = 0; inner <= outer - 1; ++inner) {
                if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                    swap(this.dataStore, inner, inner + 1);
                }
            }
        }
    }
    // 选择排序
    function selectionSort() {
        var min;
        for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
            min = outer;
            for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
                if (this.dataStore[inner] < this.dataStore[min]) {
                    min = inner;
                }
            }
            swap(this.dataStore, outer, min);
        }
    }

    function insertionSort() {
        var temp, inner;
        for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
            temp = this.dataStore[outer];
            inner = outer;
            while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
                this.dataStore[inner] = this.dataStore[inner - 1];
                --inner;
            }
            this.dataStore[inner] = temp;
        }
    }

    function shellSort() {
        for (var i=this.gaps[i]; i<this.dataStore.length; ++i) {
            var temp = this.dataStore[i];
            for (var j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
                this.dataStore[j] = this.dataStore[j - this.gaps[g]];
            }
            this.dataStore[j] = temp;
        }
    }
}

var numElements = 100000;
var nums = new CArray(numElements);
nums.setData();
var start = new Date().getTime();
nums.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log(" 对 " + numElements + " 个元素执行冒泡排序消耗的时间为：" +
    elapsed + " 毫秒。");
start = new Date().getTime();
nums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log(" 对 " + numElements + " 个元素执行选择排序消耗的时间为：" +
    elapsed + " 毫秒。");
start = new Date().getTime();
nums.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log(" 对 " + numElements + " 个元素执行插入排序消耗的时间为：" +
    elapsed + " 毫秒。");