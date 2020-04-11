const array = require('../../src/array/index');

describe('array -> all', () => {
  test('all -> true', () => {
    expect(array.all([1, 2, 3])).toBeTruthy();
  });
  test('all -> false', () => {
    expect(array.all([1, 0, 0])).toBeFalsy();
  });
  test('all -> function false', () => {
    expect(array.all([1, 2, 3], x => x > 2)).toBeFalsy();
  });
  test('all -> function true', () => {
    expect(array.all([1, 2, 3], x => x > 0)).toBeTruthy();
  });
});

describe('array -> allEqual', () => {
  test('allEqual -> false', () => {
    expect(array.allEqual([1, 2, 3])).toBeFalsy();
  });
  test('allEqual -> true', () => {
    expect(array.allEqual([1, 1, 1])).toBeTruthy();
  });
});

describe('array -> any', () => {
  test('any -> false', () => {
    expect(array.any([0, 0, 0, 0])).toBeFalsy();
  });
  test('any -> true', () => {
    expect(array.any([0, 1, 0, 0])).toBeTruthy();
  });
  test('any -> function false', () => {
    expect(array.any([1, 2, 3], x => x > 3)).toBeFalsy();
  });
  test('any -> function true', () => {
    expect(array.any([1, 2, 3], x => x > 2)).toBeTruthy();
  });
});