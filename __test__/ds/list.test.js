const { List } = require('../../src/ds/list.js');

describe('list', () => {

    test('append', () => {
        var list = new List();
        list.append('123');
        expect(list.length()).toEqual(1);
    });

    test('find', () => {
        var list = new List();
        list.append('123');
        expect(list.find('123')).toEqual(0);
    });

    test('remove true', () => {
        var list = new List();
        list.append('123');
        expect(list.remove('123')).toEqual(true);
    });

    test('remove false', () => {
        var list = new List();
        list.append('123');
        expect(list.remove('1')).toEqual(false);
    });

    test('length', () => {
        var list = new List();
        list.append('123');
        expect(list.length()).toEqual(1);
    });

    test('toString', () => {
        var list = new List();
        list.append('123');
        expect(list.toString()).toEqual(['123']);
    });

    test('insert true', () => {
        var list = new List();
        list.append('123');
        expect(list.insert('234', '123')).toEqual(true);
    });

    test('insert false', () => {
        var list = new List();
        list.append('123');
        expect(list.insert('234', '23')).toEqual(false);
    });

    test('clear', () => {
        var list = new List();
        list.append('123');
        list.clear();
        expect(list.length()).toEqual(0);
    });

    test('contains', () => {
        var list = new List();
        list.append('123');
        expect(list.contains('123')).toEqual(true);
    });

    test('currPos', () => {
        var list = new List();
        list.append('123');
        expect(list.currPos()).toEqual(0);
    });

    test('next', () => {
        var list = new List();
        list.append('123');
        list.append('456');
        list.next();
        expect(list.currPos()).toEqual(1);
    });

    test('prev', () => {
        var list = new List();
        list.append('123');
        list.append('456');
        list.next();
        list.prev();
        expect(list.currPos()).toEqual(0);
    });

    test('moveTo', () => {
        var list = new List();
        list.append('123');
        list.append('456');
        list.moveTo(1);
        expect(list.currPos()).toEqual(1);
    });

    test('front', () => {
        var list = new List();
        list.append('123');
        list.append('456');
        list.moveTo(1);
        list.front();
        expect(list.currPos()).toEqual(0);
    });

    test('end', () => {
        var list = new List();
        list.append('123');
        list.append('456');
        list.end();
        expect(list.currPos()).toEqual(1);
    });

    test('getElement', () => {
        var list = new List();
        list.append('123');
        list.append('456');
        list.moveTo(1);
        expect(list.getElement()).toEqual('456');
    });

});