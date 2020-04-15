const { HashTableOpen } = require('../../src/ds/hashTableOpen.js');

describe('HashTableOpen', () => {

    test('simpleHash', () => {
        var hto = new HashTableOpen();
        expect(hto.simpleHash('12')).toEqual(99);
    });


    test('betterHash', () => {
        var hto = new HashTableOpen();
        expect(hto.betterHash('12')).toEqual(131);
    });

    test('put and get', () => {
        var hto = new HashTableOpen();
        hto.put('12','12');
        expect(hto.get('12')).toEqual('12');
    });

    test('showDistro', () => {
        var hto = new HashTableOpen();
        hto.put('12','12');
        hto.put('13','13');
        expect(hto.showDistro()).toEqual([["12"], ["13"]]);
    });

});