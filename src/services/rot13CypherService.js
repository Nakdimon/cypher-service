var { indexToLetter, letterToIndex } = require('../utils/letterIndexDictionary')
module.exports =  {
    rot13Cypher: function (text = 'default', shift = 13) {
        var result = ''
        text.split('').forEach(char => {
            if(char.match(/^[A-Za-z]{1}$/)) {
                var index = (letterToIndex[char.toUpperCase()] + parseInt(shift)) % 26
                if(char==char.toLowerCase()) {
                    result += indexToLetter[index].toLowerCase()
                } else {
                    result += indexToLetter[index]
                }
            } else {
                result += ' '
            }
        })
        return result
    }
}