const { seqSearch,seqSearchByData,binSearch,binarySearchRecusion,count } = require('../../src/ds/search.js');

describe('search', () => {

    test('seqSearch', () => {
        var arr = [1,2,444,523,42];
        expect(seqSearch(arr,2)).toEqual(1);
    });

    test('seqSearchByData', () => {
      var arr = [1,2,444,523,42];
      expect(seqSearchByData(arr,2)).toEqual(1);
    });

    test('binSearch', () => {
      var arr = [1,2,42,444,523];
      expect(binSearch(arr,2)).toEqual(1);
    });

    test('binarySearchRecusion', () => {
      var arr = [1,2,42,444,523];
      expect(binarySearchRecusion(arr,2,0,4)).toEqual(1);
    });

    test('count', () => {
      var arr = [1,2,2,444,523];
      expect(count(arr,2)).toEqual(2);
    });

});