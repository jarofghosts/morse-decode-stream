var test = require('tape')

var morseStream = require('../')

test('turns morse code into words', function(t) {
  t.plan(2)

  var morse = morseStream()

  morse.once('data', function(chunk) {
    t.equal(chunk.toString(), 'HELLO,')
  })

  morse.write('.... . .-.. .-.. --- --..--')

  morse.once('data', function(chunk) {
    t.equal(chunk.toString(), 'WORLD')
  })

  morse.write('.-- --- .-. .-.. -..')

  morse.end()
})
