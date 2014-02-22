morse-decode-stream
====

[![Build Status](https://travis-ci.org/jarofghosts/morse-decode-stream.png?branch=master)](https://travis-ci.org/jarofghosts/morse-decode-stream)

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
