function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data && i > (arr.length * 0.2)) {
            swap(arr, i, 0);
            return true;
        }
        else if (arr[i] == data) {
            return true;
        }
    }
    return false;

}

function swap(arr, index, index1) {
    var temp = arr[index];
    arr[index] = arr[index1];
    arr[index1] = temp;
}

var numbers = [5, 1, 7, 4, 2, 10, 9, 3, 6, 8];

for (var i = 1; i <= 3; i++) {
    seqSearch(numbers, 4);
    console.log(numbers);
}