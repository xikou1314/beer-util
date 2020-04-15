const { Dictionary } = require('../../src/ds/dictionary.js');

describe('Dictionary', () => {

    test('add and find', () => {
        var dic = new Dictionary();
        dic.add('num1','123');
        expect(dic.find('num1')).toEqual('123');
    });

    test('remove', () => {
        var dic = new Dictionary();
        dic.add('num1','123');
        dic.remove('num1');
        expect(dic.find('num1')).toEqual(undefined);
    });

    test('showAll', () => {
        var dic = new Dictionary();
        dic.add('num1','123');
        expect(dic.showAll()).toEqual(['123']);
    });

    test('count', () => {
        var dic = new Dictionary();
        dic.add('num1','123');
        expect(dic.count()).toEqual(1);
    });

    test('clear', () => {
        var dic = new Dictionary();
        dic.add('num1','123');
        dic.clear();
        expect(dic.count()).toEqual(0);
    });
    
});