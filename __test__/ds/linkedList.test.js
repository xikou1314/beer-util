const { LList } = require('../../src/ds/linkedList.js');

describe('LList', () => {

    test('insert and find', () => {
        var llist = new LList();
        llist.insert(11,'head');
        var current = llist.find(11);
        expect(current.element).toEqual(11);
    });

    test('display', () => {
        var llist = new LList();
        llist.insert(11,'head');
        expect(llist.display()).toEqual([11]);
    });

    test('findPrevious', () => {
        var llist = new LList();
        llist.insert(11,'head');
        llist.insert(22, 11);
        var current = llist.findPrevious(22);
        expect(current.element).toEqual(11);
    });

    test('remove', () => {
        var llist = new LList();
        llist.insert(11,'head');
        llist.insert(22, 11);
        expect(llist.remove(22)).toEqual(true);
    });


});