
/**
 * 数组中的所有元素都满足fn时返回true
 *
 * all([4, 2, 3], x => x > 1); // true
 * all([1, 2, 3]); // true
 * 
 * @param {*} arr
 * @param {*} [fn=Boolean]
 */
const all = (arr, fn = Boolean) => arr.every(fn);

/**
 * 数组中所有元素是否相等
 *
 * allEqual([1, 2, 3, 4, 5, 6]); // false
 * allEqual([1, 1, 1, 1]); // true
 * 
 * @param {*} arr
 */
const allEqual = arr => arr.every(val => val === arr[0]);

/**
 * 数组中某些元素满足fn
 * 
 * any([0, 1, 2, 0], x => x >= 2); // true
 * any([0, 0, 1, 0]); // true
 *
 * @param {*} arr
 * @param {*} [fn=Boolean]
 */
const any = (arr, fn = Boolean) => arr.some(fn);

module.exports = {
  all,
  allEqual,
  any
};
