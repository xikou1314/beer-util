function binarySearch(num, arr, start,end) {
    var len = end - start + 1;
    // 当长度为1的时候 且不等于num时
    if(len <= 1) {
        return start;
    }
    
    var center = Math.floor(len/2);

    if(num < arr[center]) {
        // 左边
    return binarySearch(num,arr,start,center-1)
    } else if(num > arr[center]) {
        // 右边
    return binarySearch(num,arr,center+1,end)
    } else {
        return center;
    }
}

    function Find(target, array)
    {
        // write code here
        var lenOut = array.length;
        var lenInner = array[0].length;
        var i = 0;
        var j = lenInner - 1;
        
        while(i<lenOut && j >= 0 ) {
            if(array[i][j] > target) {
                j --;
            } else if(array[i][j] < target) {
                i ++;
            } else {

                return true;
            }
        }
        return false;
        
    }
    console.log(Find(1,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]));