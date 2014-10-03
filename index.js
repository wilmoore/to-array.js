
// expose `toArray`

module.exports = toArray;

/**
 * is value array-like?
 *
 * @param  {*} val
 * @return {Boolean}
 */

function arrayLike(val) {
  // do not fail on normal objects that work just like an array but aren't exactly an array.
  return Object(val) === val && 'number' == typeof val.length;
};

/**
 * is value a number?
 *
 * @param  {*} val
 * @return {Boolean}
 */

function number(val) {
  return Object.prototype.toString.call(val) == '[object Number]';
};

/**
 * is value a string?
 *
 * @param  {*} val
 * @return {Boolean}
 */

function string(val) {
  return Object.prototype.toString.call(val) == '[object String]';
};

/**
 * is value a classList?
 *
 * @param  {*} val
 * @return {Boolean}
 */

function classlist(val) {
  return Object.prototype.toString.call(val) == '[object DOMTokenList]';
};

/**
 * Converts primitives and objects (plain or array-like) to a sensible array representation.
 *
 * #### Array ... Array
 *
 *     toArray([1, 2, 3]) //=> [1, 2, 3]
 *
 * #### String ... Array
 *
 *     toArray('id') //=> ['id']
 *
 * #### undefined/null ... Array
 *
 *     toArray(void 0 || null) //=> []
 *
 * @param  {*} value
 * any value.
 *
 * @return {Array}
 * array representation.
 */

function toArray(val, delimiter) {
  if (string(val) && delimiter)   return val.split(delimiter);
  if (string(val) || number(val)) return [val];
  if (classlist(val))             return String.prototype.split.call(val, /\s/);
  if (arrayLike(val))             return val.toArray ? val.toArray() : [].slice.call(val);

  return [];
}

