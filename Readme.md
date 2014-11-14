# to-array.js

[![Build Status](http://img.shields.io/travis/wilmoore/to-array.js.svg)](https://travis-ci.org/wilmoore/to-array.js) [![NPM version](http://img.shields.io/npm/v/to-array.js.svg)](https://www.npmjs.org/package/to-array.js) [![NPM downloads](http://img.shields.io/npm/dm/to-array.js.svg)](https://www.npmjs.org/package/to-array.js) [![LICENSE](http://img.shields.io/npm/l/to-array.js.svg)](license)

  Converts primitives and objects (plain or array-like) to a sensible array representation for [Node.js][] and the browser.

## Examples

#### Array ... Array

    toArray([1, 2, 3]);
    //=> [1, 2, 3]

#### undefined/null ... Array

    toArray(void 0 || null)
    //=> []

#### String ... Array

    toArray('id');
    //=> ['id']

#### Delimited String ... Array

    toArray('a,b,c', ',');
    //=> ['a', 'b', 'c']

#### Number ... Array

    toArray(42);
    //=> [42]

#### DOM nodeList

    var elements = document.getElementsByTagName('textarea');
    toArray(elements);
    //=> [ <textarea id="wgjc"></textarea>, <textarea id="wgjs"></textarea>, <textarea id="wgju"></textarea> ]

#### DOM classList

```html
<div id="example" class="one two">
```

    toArray(document.getElementById('example').classList);
    //=> [ "one", "two" ]

## Installation

[npm](https://npmjs.org/package/to-array.js)

    % npm install to-array.js

[component](http://component.io/wilmoore/to-array.js)

    % component install wilmoore/to-array.js

[bower](http://sindresorhus.com/bower-components/)

    % bower install to-array.js

[jam](http://jamjs.org/packages/#/details/to-array.js)

    % jam install to-array.js

[volo](http://volojs.org)

    % volo add wilmoore/to-array.js

[manual][]

1. download

        % curl -#O https://raw.github.com/wilmoore/to-array.js/master/to-array.js

2. use

        <script src="to-array.js"></script>

## Alternatives

- [timoxley/to-array][to-array]: slightly different semantics.
- [_.toArray][]: I didn't want this: `_.toArray('hi') // ['h', 'i']`

## Building a release

    % make to-array.js
    % git commit …
    % npm version minor
    % git push
    % git push --tags
    % npm publish

## License

  [MIT](license)

[Node.js]:  http://nodejs.org
[manual]:   http://yuiblog.com/blog/2006/06/01/global-domination/
[to-array]: https://github.com/timoxley/to-array
[_.toArray]: http://underscorejs.org/#toArray

