!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.toArray=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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


},{}]},{},[1])(1)
});