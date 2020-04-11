// 数组工具
function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
   
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
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
// 冒泡排序
function bubbleSort(arr) {
    var numElements = arr.length;
    for (var outer = numElements; outer >= 2; --outer) {
        for (var inner = 0; inner <= outer - 1; ++inner) {
            if (arr[inner] > arr[inner + 1]) {
                swap(arr, inner, inner + 1);
            }
        }
    }
    return arr;
}
// 选择排序
function selectionSort(arr) {
    var min;
    for (var outer = 0; outer <= arr.length - 2; ++outer) {
        min = outer;
        for (var inner = outer + 1; inner <= arr.length - 1; ++inner) {
            if (arr[inner] < arr[min]) {
                min = inner;
            }
        }
        swap(arr, outer, min);
    }
    return arr;
}
// 插入排序
function insertionSort(arr) {
    var temp, inner;
    for (var outer = 1; outer <= arr.length - 1; ++outer) {
        temp = arr[outer];
        inner = outer;
        while (inner > 0 && (arr[inner - 1] >= temp)) {
            arr[inner] = arr[inner - 1];
            --inner;
        }
        arr[inner] = temp;
    }
    return arr;
}
// 希尔排序
function shellSort(arr) {
    var gaps = [5, 3, 1];
    for (var g = 0; g < gaps.length; ++g) {
        for (var i = gaps[g]; i < arr.length; ++i) {
            var temp = arr[i];
            for (var j = i; j >= gaps[g] &&
                arr[j - gaps[g]] > temp;
                j -= gaps[g]) {
                arr[j] = arr[j - gaps[g]];
            }
            arr[j] = temp;
        }
    }
    return arr;
}
// 动态间隔的希尔排序
function shellSortNynamic(arr) {
    var N = arr.length;
    var h = 1;
    while(h < N/3) {
        h = 3 * h + 1;
    }
    while (h>=1) {
        for (var i=h; i < N; i++) {
            for (var j=i; j >= h && arr[j] < arr[j-h]; j-=h) {
                swap(arr, j, j-h);
            }
        }
        h = (h-1)/3;
    }
    return arr;
}
// 归并排序
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    var step = 1;
    var left,right;
    while (step < arr.length) {
        left = 0;
        right = step;
        while (right + step <= arr.length) {
            mergeArrays(arr, left, left + step, right, right + step);
            left = right + step;
            right = left + step;
        }
        if (right < arr.length) {
            mergeArrays(arr, left, left+step, right, arr.length);
        }
        step *= 2;
    }
    return arr;
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    var k = startRight;
    for (var i=0; i < rightArr.length -1; ++i) {
        rightArr[i] = arr[k];
        ++k;
    }
    k = startLeft;
    for (var i=0; i < leftArr.length - 1; ++i) {
        leftArr[i] = arr[k];
        ++k;
    }

    rightArr[rightArr.length - 1] = Infinity;
    leftArr[leftArr.length - 1] = Infinity;
    var m = 0;
    var n = 0;
    for (var k=startLeft; k<stopRight; ++k) {
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++;
        } else {
            arr[k] = rightArr[n];
            n++;
        }
    }
}
// 快速排序
function qSort(arr) {
    if(arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i=1; i<arr.length; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return qSort(left).concat(pivot, qSort(right));
}


module.exports = {
    CArray,
    swap,
    bubbleSort,
    selectionSort,
    insertionSort,
    shellSort,
    shellSortNynamic,
    mergeSort,
    qSort
};
