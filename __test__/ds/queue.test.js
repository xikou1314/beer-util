const { Queue } = require('../../src/ds/queue.js');

describe('queue', () => {

    test('enqueue', () => {
        var queue = new Queue();
        queue.enqueue('123');
        expect(queue.dataStore.length).toEqual(1);
    });

    test('dequeue', () => {
        var queue = new Queue();
        queue.enqueue('123');
        expect(queue.dequeue()).toEqual('123');
    });

    test('front', () => {
        var queue = new Queue();
        queue.enqueue('123');
        queue.enqueue('456');
        expect(queue.front()).toEqual('123');
    });

    test('back', () => {
        var queue = new Queue();
        queue.enqueue('123');
        queue.enqueue('456');
        expect(queue.back()).toEqual('456');
    });

    test('toString', () => {
        var queue = new Queue();
        queue.enqueue('123');
        expect(queue.toString()).toEqual('123\n');
    });

    test('empty flase', () => {
        var queue = new Queue();
        queue.enqueue('123');
        queue.enqueue('456');
        expect(queue.empty()).toEqual(false);
    });

    test('empty true', () => {
        var queue = new Queue();
        expect(queue.empty()).toEqual(true);
    });





});