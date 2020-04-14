/**
 * 函数防抖
 *
 * @param {*} fn
 * @param {*} delay
 * @returns
 */
const debounce = (fn, delay) => {
  var lastTime = 0;
  return function() {
    var nowTime = Date.now();
    if (nowTime - lastTime > delay) {
      fn.call(this);
      lastTime = nowTime;
    }
  };
};

/**
 * 函数节流
 *
 * @param {*} fn
 * @param {*} delay
 * @returns
 */
const throttle = (fn, delay) => {
  var timer = null;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this);
    }, delay);
  };
};

module.exports = {
  throttle,
  debounce
};