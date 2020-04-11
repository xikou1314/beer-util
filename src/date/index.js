
/**
 * 获得已过去多少天
 *
 * @param {*} date
 */
const dayOfYear = date => {
   return Math.floor((date - new Date(date.getFullYear(), 0 ,0)) / 1000 / 60 / 60 / 24);
}

/**
 * 格式化持续时间
 *
 * @param {*} ms
 * @returns
 */
const formatDuration = ms => {
    if (ms < 0) ms = -ms;
    const time = {
      day: Math.floor(ms / 86400000),
      hour: Math.floor(ms / 3600000) % 24,
      minute: Math.floor(ms / 60000) % 60,
      second: Math.floor(ms / 1000) % 60,
      millisecond: Math.floor(ms) % 1000
    };
    return Object.entries(time)
      .filter(val => val[1] !== 0)
      .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
      .join(', ');
};
/**
 * 日期格式化
 *
 * @param {*} fmt
 * @param {*} date
 * @returns
 */
const dateFormat = (fmt, date) => {
  let ret;
  let opt = {
      "Y+": date.getFullYear().toString(),        // 年
      "m+": (date.getMonth() + 1).toString(),     // 月
      "d+": date.getDate().toString(),            // 日
      "H+": date.getHours().toString(),           // 时
      "M+": date.getMinutes().toString(),         // 分
      "S+": date.getSeconds().toString()          // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
          fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      };
  };
  return fmt;
}

module.exports =  {
    dayOfYear,
    formatDuration,
    dateFormat
}