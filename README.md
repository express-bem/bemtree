
# express-bem-bemtree

[![Build Status](https://travis-ci.org/express-bem/bemtree.svg)](https://travis-ci.org/express-bem/bemtree)
 [![Dependency Status](https://david-dm.org/express-bem/bemtree.png)](https://david-dm.org/express-bem/bemtree)

[bemtree.js][] engine (plugin) for [express-bem][]

[bemtree.js]: https://github.com/bem/bem-core
[express-bem]: https://github.com/express-bem/express-bem

## Why

To use `.bemtree.js` techs to render pages.

## Installation

```sh
$ npm i express-bem-bemtree --save
```

## Usage

```js
var Express = require('express');
var ExpressBem = require('express-bem');

var app = Express();
var bem = ExpressBem({root: './path-to/bem-project'}).bindTo(app);

// simple
bem.usePlugin('express-bem-bemtree');
```

## License

MIT [License][]

[License]: https://github.com/express-bem/bemtree/blob/master/LICENSE
