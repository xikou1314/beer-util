const { Node, BST } = require('../../src/ds/BST.js');

describe('BST', () => {

    test('insert and find', () => {
        var bst = new BST();
        bst.insert(11);
        var current = bst.find(11);
        expect(current.data).toEqual(11);
    });

    test('getMin', () => {
        var bst = new BST();
        var arr = [11,22,6]
        for(var i=0; i<arr.length; i++) {
            bst.insert(arr[i]);
        }
        expect(bst.getMin()).toEqual(6);
    });

    test('getMax', () => {
        var bst = new BST();
        var arr = [11,22,6]
        for(var i=0; i<arr.length; i++) {
            bst.insert(arr[i]);
        }
        expect(bst.getMax()).toEqual(22);
    });

    test('inOrder', () => {
        var bst = new BST();
        var arr = [11,22,6,3,47,34,12,43]
        for(var i=0; i<arr.length; i++) {
            bst.insert(arr[i]);
        }
        
        expect(bst.inOrder(bst.root)).toEqual([3, 6, 11, 12, 22, 34, 43, 47]);
    });

    test('perOrder', () => {
        var bst = new BST();
        var arr = [11,22,6,3,47,34,12,43]
        for(var i=0; i<arr.length; i++) {
            bst.insert(arr[i]);
        }
        
        expect(bst.preOrder(bst.root)).toEqual([11, 6, 3, 22, 12, 47, 34, 43]);
    });

    test('postOrder', () => {
        var bst = new BST();
        var arr = [11,22,6,3,47,34,12,43]
        for(var i=0; i<arr.length; i++) {
            bst.insert(arr[i]);
        }
        
        expect(bst.postOrder(bst.root)).toEqual([3, 6, 12, 43, 34, 47, 22, 11]);
    });

    test('removeBymin', () => {
        var bst = new BST();
        var arr = [11,22,6,3,47,34,12,43]
        for(var i=0; i<arr.length; i++) {
            bst.insert(arr[i]);
        }
        bst.removeByMin(6);
        expect(bst.postOrder(bst.root)).toEqual([3, 12, 43, 34, 47, 22, 11]);
    });

    test('removeByMax', () => {
        var bst = new BST();
        var arr = [11,22,6,3,47,34,12,43]
        for(var i=0; i<arr.length; i++) {
            bst.insert(arr[i]);
        }
        bst.removeByMax(47);
        expect(bst.postOrder(bst.root)).toEqual([3, 6, 12, 43, 34, 22, 11]);
    });
    



});