const { Stack } = require('../../src/ds/stack.js');

describe('stack', () => {

    test('push', () => {
        var stack = new Stack();
        stack.push('123');
        expect(stack.length()).toEqual(1);
    });

    test('pop', () => {
        var stack = new Stack();
        stack.push('123');
        expect(stack.pop()).toEqual('123');
    });

    test('peek', () => {
        var stack = new Stack();
        stack.push('123');
        expect(stack.peek()).toEqual('123');
        expect(stack.length()).toEqual(1);
    });

    test('length', () => {
        var stack = new Stack();
        stack.push('123');
        expect(stack.length()).toEqual(1);
    });

    test('clear', () => {
        var stack = new Stack();
        stack.push('123');
        stack.clear();
        expect(stack.length()).toEqual(0);
    });

});