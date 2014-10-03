var assert  = require('assert');
var toArray = require('..');

describe('toArray()', function(){

  var args = function () {
    return arguments;
  };

  function Collection(array) {
    this.length  = array.length;
    this.toArray = function () { return array; }
  }

  var collection = new Collection([1, 2]);

  var cases = [
    { name: 'null',               param: null,       result: [] },
    { name: 'undefined',          param: void 0,     result: [] },
    { name: 'arrays',             param: [1, 2, 3],  result: [1, 2, 3] },
    { name: 'strings',            param: 'id',       result: ['id'] },
    { name: 'delimited strings',  param: 'a,b,c',    delimiter: ',', result: ['a','b','c'] },
    { name: 'arguments',          param: args(1, 2), result: [1, 2] },
    { name: 'collections',        param: collection, result: [1, 2] }
  ];

  cases.forEach(function (test) {
    it(test.name, function() {
      assert.deepEqual(toArray(test.param, test.delimiter), test.result);
    });
  });

});
