const { HashTableSeq } = require('../../src/ds/hashTableSeq.js');

describe('HashTableOpen', () => {

    test('simpleHash', () => {
        var hts = new HashTableSeq();
        expect(hts.simpleHash('12')).toEqual(99);
    });


    test('betterHash', () => {
        var hts = new HashTableSeq();
        expect(hts.betterHash('12')).toEqual(131);
    });

    test('put and get', () => {
        var hts = new HashTableSeq();
        hts.put('12','12');
        expect(hts.get('12')).toEqual('12');
    });

    test('showDistro', () => {
        var hts = new HashTableSeq();
        hts.put('12','12');
        hts.put('13','13');
        expect(hts.showDistro()).toEqual(["12", "13"]);
    });

});