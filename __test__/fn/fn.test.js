const FN = require('../../src/fn/index');

describe('fn', () => {

    test('debounceUnsync', () => {
        var count = 0;
        var testFn = function () {
            count += 1;
        };
        var debouncedFn =  FN.debounce(testFn, 1000);
        debouncedFn();
        debouncedFn();
        expect(count).toEqual(1);
    });

    test('debounceSync', (done) => {
        var count = 0;
        var testFn = function () {
            count += 1;
        };
        var debouncedFn =  FN.debounce(testFn, 1000);
        debouncedFn();
        debouncedFn();
        setTimeout(()=> {
            debouncedFn();
            expect(count).toEqual(2);
            done();
        },2000)
        
    });

    test('throttle', () => {
        var count = 0;
        var testFn = function () {
            count += 1;
        };
        var throttleFn =  FN.throttle(testFn, 1000);
        throttleFn();
        setTimeout(()=> {
            expect(count).toBeGreaterThan(2);
            done();
        },2000)
  
    });
});