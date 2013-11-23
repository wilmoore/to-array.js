
// expose `toArray`

module.exports = toArray;

/**
 * is value an array?
 *
 * @param  {*} val
 * @return {Boolean}
 */

function array(val) {
  return Object(val) === val && 'number' == typeof val.length;
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

function toArray(val) {
  if (string(val)) return [val];
  if (array(val))  return val.toArray ? val.toArray() : [].slice.call(val);

  return [];
}

