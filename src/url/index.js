const urlParse = require('url-parse');

/**
 * 将url字符串转化为对象
 *
 * @param {*} url
 * @returns
 */
const parse = (url) => {
  return urlParse(url, true);
};

/**
 * 将url字符串的query参数转化为对象
 *
 * @param {*} url
 * @returns
 */
const parseQuery = (url) => {
  return urlParse(url, true).query;
};

module.exports = {
  parse,
  parseQuery
};