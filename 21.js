function binarySearch(num, arr, start, end) {
    var len = end - start + 1;
    // 当长度为1的时候 且不等于num时
    if (len <= 1) {
        return start;
    }

    var center = Math.floor(len / 2);

    if (num < arr[center]) {
        // 左边
        return binarySearch(num, arr, start, center - 1)
    } else if (num > arr[center]) {
        // 右边
        return binarySearch(num, arr, center + 1, end)
    } else {
        return center;
    }
}

function binSearch(arr, data) {
    var upperBound = arr.length - 1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        console.log('中点:' + mid);
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

var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}
var retVal = count(nums, 20);
console.log(" 找到了 " + retVal + " 次重复出现的 " + 20 + "。");
