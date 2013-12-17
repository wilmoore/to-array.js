(function(e){if("function"==typeof bootstrap)bootstrap("to-array",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeToArray=e}else"undefined"!=typeof window?window.toArray=e():global.toArray=e()})(function(){var define,ses,bootstrap,module,exports;
return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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

function toArray(val) {
  if (string(val))    return [val];
  if (classlist(val)) return String.prototype.split.call(klass, /\s/);
  if (array(val))     return val.toArray ? val.toArray() : [].slice.call(val);

  return [];
}


},{}]},{},[1])(1)
});
;