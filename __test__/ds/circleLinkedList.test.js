const { CLList } = require('../../src/ds/circleLinkedList.js');

describe('CLList', () => {

    test('insert and find', () => {
        var cllist = new CLList();
        cllist.insert(11,'head');
        var current = cllist.find(11);
        expect(current.element).toEqual(11);
    });

    test('display', () => {
        var cllist = new CLList();
        cllist.insert(11,'head');
        expect(cllist.display()).toEqual([11]);
    });

    test('findPrevious', () => {
        var cllist = new CLList();
        cllist.insert(11,'head');
        cllist.insert(22, 11);
        var current = cllist.findPrevious(22);
        expect(current.element).toEqual(11);
    });

    test('remove', () => {
        var cllist = new CLList();
        cllist.insert(11,'head');
        cllist.insert(22, 11);
        expect(cllist.remove(22)).toEqual(true);
    });


});