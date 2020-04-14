const { DLList } = require('../../src/ds/doubleLinkedList.js');

describe('DLList', () => {

    test('insert and find', () => {
        var dllist = new DLList();
        dllist.insert(11,'head');
        var current = dllist.find(11);
        expect(current.element).toEqual(11);
    });

    test('display', () => {
        var dllist = new DLList();
        dllist.insert(11,'head');
        expect(dllist.display()).toEqual([11]);
    });

    test('findlast', () => {
        var dllist = new DLList();
        dllist.insert(11,'head');
        dllist.insert(22, 11);
        var current = dllist.findLast();
        expect(current.element).toEqual(22);
    });

    test('dispReverse', () => {
        var dllist = new DLList();
        dllist.insert(11,'head');
        dllist.insert(22, 11);
        expect(dllist.dispReverse()).toEqual([22,11]);
    });

    test('remove', () => {
        var dllist = new DLList();
        dllist.insert(11,'head');
        dllist.insert(22, 11);
        expect(dllist.remove(22)).toEqual(true);
    });


});