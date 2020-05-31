// 线性搜索
function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            return i;
        }
    }
    return -1;
}

// 自组织数据线性搜索
function seqSearchByData(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data && i > (arr.length * 0.2)) {
            swap(arr, i, 0);
            return i;
        }
        else if (arr[i] == data) {
            return i;
        }
    }
    return -1;

}

function swap(arr, index, index1) {
    var temp = arr[index];
    arr[index] = arr[index1];
    arr[index1] = temp;
}

// 循环二分搜索
function binSearch(arr, data) {
    var upperBound = arr.length - 1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        } else if (arr[mid] > data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

// 递归二分查找
function binarySearchRecusion(arr, num, start, end) {
    var len = end - start + 1;
    // 当长度为1的时候 且不等于num时
    if (len <= 1) {
        return start;
    }

    var center = Math.floor(len / 2);

    if (num < arr[center]) {
        // 左边
        return binarySearchRecusion(arr, num, start, center - 1)
    } else if (num > arr[center]) {
        // 右边
        return binarySearchRecusion(arr, num, center + 1, end)
    } else {
        return center;
    }
}

// 出现次数
function count(arr, data) {
    var count = 0;
    var position = binSearch(arr, data);
    if (position > -1) {
        ++count;
        for (var i = position - 1; i > 0; --i) {
            if (arr[i] == data) {
                ++count;
            }
            else {
                break;
            }
        }
        for (var i = position + 1; i < arr.length; ++i) {
            if (arr[i] == data) {
                ++count;
            }
            else {
                break;
            }
        }
    }
    return count;
}


module.exports = {
    seqSearch,
    seqSearchByData,
    binSearch,
    binarySearchRecusion,
    count
};