var morse_stream = require('../'),
    stream = require('stream'),
    assert = require('assert'),
    ws = stream.Writable(),
    rs = stream.Readable(),
    c = 1

ws._write = function(chunk, enc, next) {
  c == 1 && assert.strictEqual(chunk.toString(), 'HELLO,')
  c == 2 && assert.strictEqual(chunk.toString(), 'WORLD')

  c++
  next()
}

rs._read = function() {
  rs.push('.... . .-.. .-.. --- --..--')
  rs.push('.-- --- .-. .-.. -..')
  rs.push(null)
}

rs.pipe(morse_stream()).pipe(ws)
