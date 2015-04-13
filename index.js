var codes = require('morse-decodes')
  , through = require('through2')

module.exports = morseStream

function morseStream() {
  var stream = through(convertWord)

  return stream

  function convertWord(word, _, next) {
    var bits = word.toString().split(' ')
      , morse = []
      , code
      , bit

    for(var i = 0, l = bits.length; i < l; ++i) {
      bit = bits[i]
      code = codes[bit]

      if(code) {
        morse.push(code)
      }
    }

    stream.push(morse.join(''))

    next()
  }
}
