const { Set } = require('../../src/ds/set.js');

describe('Set', () => {

    test('add true', () => {
        var set = new Set();
        expect(set.add('123')).toEqual(true);
    });

    test('add false', () => {
        var set = new Set();
        set.add('123');
        expect(set.add('123')).toEqual(false);
    });

    test('remove false', () => {
        var set = new Set();
        set.add('123');
        expect(set.remove('12')).toEqual(false);
    });

    test('remove true', () => {
        var set = new Set();
        set.add('123');
        expect(set.remove('123')).toEqual(true);
    });

    test('show', () => {
        var set = new Set();
        set.add('123');
        expect(set.show()).toEqual(['123']);
    });

    test('contains true', () => {
        var set = new Set();
        set.add('123');
        expect(set.contains('123')).toEqual(true);
    });

    test('contains false', () => {
        var set = new Set();
        set.add('123');
        expect(set.contains('12')).toEqual(false);
    });

    test('union', () => {
        var set1 = new Set();
        var set2 = new Set();
        set1.add('123');
        set2.add('456');
        expect(set1.union(set2).show()).toEqual(['123','456']);
    });

    test('intersect', () => {
        var set1 = new Set();
        var set2 = new Set();
        set1.add('123');
        set1.add('1234');
        set2.add('123');
        set2.add('456');
        expect(set1.intersect(set2).show()).toEqual(['123']);
    });

    test('subset true', () => {
        var set1 = new Set();
        var set2 = new Set();
        set1.add('123');
        set1.add('1234');
        set2.add('123');
        expect(set2.subset(set1)).toEqual(true);
    });

    test('subset false', () => {
        var set1 = new Set();
        var set2 = new Set();
        set1.add('123');
        set1.add('1234');
        set2.add('12');
        expect(set2.subset(set1)).toEqual(false);
    });

    test('size', () => {
        var set = new Set();
        set.add('123');
        set.add('1234');
        expect(set.size()).toEqual(2);
    });

    test('difference', () => {
        var set1 = new Set();
        var set2 = new Set();
        set1.add('123');
        set1.add('1234');
        set2.add('123');
        set2.add('456');
        expect(set1.difference(set2).show()).toEqual(['1234']);
    });

});