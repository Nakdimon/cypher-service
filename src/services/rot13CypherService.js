var { indexToLetter, letterToIndex } = require('../utils/letterIndexDictionary')
module.exports =  {
    rot13Cypher: function (text = 'default', shift = 13) {
        var result = ''
        text.split('').forEach(char => {
            if(char.match(/[a-zA-Z]{1}/g)) {
                var index = (letterToIndex[char.toUpperCase()] + shift) % 26
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