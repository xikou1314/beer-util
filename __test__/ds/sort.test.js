const { bubbleSort,selectionSort,insertionSort,shellSort,shellSortDynamic,mergeSort,qSort } = require('../../src/ds/sort.js');

describe('sort', () => {

    test('bubbleSort', () => {
        var arr = [1,2,444,523,42];
        expect(bubbleSort(arr)).toEqual([1,2,42,444,523]);
    });

    test('selectionSort', () => {
      var arr = [1,2,444,523,42];
      expect(selectionSort(arr)).toEqual([1,2,42,444,523]);
    });

    test('insertionSort', () => {
      var arr = [1,2,444,523,42];
      expect(insertionSort(arr)).toEqual([1,2,42,444,523]);
    });

    test('shellSort', () => {
      var arr = [1,2,444,523,42];
      expect(shellSort(arr)).toEqual([1,2,42,444,523]);
    });

    test('shellSortDynamic', () => {
      var arr = [1,2,444,523,42];
      expect(shellSortDynamic(arr)).toEqual([1,2,42,444,523]);
    });

    test('mergeSort', () => {
      var arr = [1,2,444,523,42];
      expect(mergeSort(arr)).toEqual([1,2,42,444,523]);
    });

    test('qSort', () => {
      var arr = [1,2,444,523,42];
      expect(qSort(arr)).toEqual([1,2,42,444,523]);
    });

});
