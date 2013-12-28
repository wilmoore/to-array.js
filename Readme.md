# to-array.js [![Build Status](https://travis-ci.org/wilmoore/to-array.js.png?branch=master)](https://travis-ci.org/wilmoore/to-array.js) [![Build Status](https://david-dm.org/wilmoore/to-array.js.png)](https://david-dm.org/wilmoore/to-array.js) [![NPM version](https://badge.fury.io/js/to-array.js.png)](http://badge.fury.io/js/to-array.js)

  Converts primitives and objects (plain or array-like) to a sensible array representation for [Node.js][] and the browser.

## Examples

#### Array ... Array

    toArray([1, 2, 3]);
    //=> [1, 2, 3]

#### undefined/null ... Array

    toArray(void 0 || null)
    //=> []

#### String ... Array

```javascript
toArray('id');
//=> ['id']
```

#### DOM nodeList

```javascript
var elements = document.getElementsByTagName('textarea');
toArray(elements);
//=> [ <textarea id="wgjc"></textarea>, <textarea id="wgjs"></textarea>, <textarea id="wgju"></textarea> ]
```

#### DOM classList

```html
<div id="example" class="one two">
```

```javascript
toArray(document.getElementById('example').classList);
//=> [ "one", "two" ]
```

## Installation

[component](http://component.io/wilmoore/to-array.js)

    $ component install wilmoore/to-array.js

[bower](http://sindresorhus.com/bower-components/)

    $ bower install to-array.js

[npm](https://npmjs.org/package/to-array.js)

[![NPM](https://nodei.co/npm/to-array.js.png?downloads=true)](https://nodei.co/npm/to-array.js/)

[jam](http://jamjs.org/packages/#/details/to-array.js)

    $ jam install to-array.js

[volo](http://volojs.org)

    $ volo add wilmoore/to-array.js

[manual][]

1. download

        % curl -#O https://raw.github.com/wilmoore/to-array.js/master/to-array.js

2. use

        <script src="to-array.js"></script>

## Alternatives

- [timoxley/to-array][to-array]: slightly different symantics.
- [_.toArray][]: I didn't want this: `_.toArray('hi') // ['h', 'i']`

## License

  MIT

[Node.js]:  http://nodejs.org
[manual]:   http://yuiblog.com/blog/2006/06/01/global-domination/
[to-array]: https://github.com/timoxley/to-array
[_.toArray]: http://underscorejs.org/#toArray

