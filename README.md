# morse-decode-stream

[![Build Status](http://img.shields.io/travis/jarofghosts/morse-decode-stream.svg?style=flat)](https://travis-ci.org/jarofghosts/morse-decode-stream)
[![npm install](http://img.shields.io/npm/dm/morse-decode-stream.svg?style=flat)](https://www.npmjs.org/package/morse-decode-stream)

transform morse code into words

## example

```js
var demorse = require('morse-decode-stream')

demorse.pipe(process.stdout)

demorse.write('.... . .-.. .-.. ---')
// HELLO
```

## notes

morse-decode-stream expects morse code consisting of `.`s and `-`s with
each encoded character separated by space.

for example, "sos" would be represented as `'... --- ...'`

## license

MIT
