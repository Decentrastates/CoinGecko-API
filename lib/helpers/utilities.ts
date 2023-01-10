/**
 * @description Internal helper to check if parameter is a string
 * @function isString
 * @param {*} str
 * @returns {boolean}
 */
const isString = (str: any): boolean => {
    return (typeof str === 'string' || str instanceof String);
  };
  
  /**
   * @description Internal helper to check if string is empty
   * @function isStringEmpty
   * @param {*} str
   * @returns {boolean}
   */
  const isStringEmpty = (str: any): boolean => {
    if (!isString(str)) return false;
    return (str.length === 0);
  };
  
  /**
   * @description Internal helper to check if parameter is a date
   * @function isDate
   * @param {*} date
   * @returns {boolean}
   */
  const isDate = (date: any): boolean => {
    if (isString(date) || isArray(date) || date === undefined || date == null) return false;
    return (date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date));
  };
  
  /**
   * @description Internal helper to check if parameter is an object
   * @function isObject
   * @param {*} obj
   * @returns {boolean}
   */
  const isObject = (obj: any): boolean => {
    if (isArray(obj) || isDate(obj)) return false;
    return (obj !== null && typeof obj === 'object');
  };
  
  /**
   * @description Internal helper to check if parameter is a number
   * @function isNumber
   * @param {*} num
   * @returns {boolean}
   */
  const isNumber = (num: any): boolean => {
    return (!isNaN(num) && !isNaN(parseInt(num)));
  };
  
  /**
   * @description Internal helper to check if parameter is an array
   * @function isArray
   * @param {*} arr
   * @returns {boolean}
   */
  const isArray = (arr: any): boolean => {
    return Array.isArray(arr);
  };
  
  /**
   * @description Internal helper to emit a warning to the console
   * @function _WARN_
   * @param {string} title
   * @param {string} detail
   * @returns {boolean}
   */
  const _WARN_ = (title: string = '', detail: string = ''): boolean => {
    process.emitWarning(title, {
      detail,
      code: 'CoinGecko',
    });
  
    return true;
  };
  
  //
  
  export {
    isString,
    isStringEmpty,
    isDate,
    isObject,
    isNumber,
    isArray,
    _WARN_,
  };