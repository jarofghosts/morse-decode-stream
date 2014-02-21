var through = require('through'),
    codes = require('morse-decodes')

module.exports = morse_stream

function morse_stream() {
  var stream = through(convert_word)

  return stream

  function convert_word(word) {
    var bits = word.toString().split(' '),
        morse = [],
        code,
        bit

    for (var i = 0, l = bits.length; i < l; ++i) {
      bit = bits[i]
      code = codes[bit]
      if (code) morse.push(code)
    }

    stream.queue(morse.join(''))
  }
}
