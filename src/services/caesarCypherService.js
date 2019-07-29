module.exports  = {
    caesarCypher: function (text = 'default', shift = 4) {
        var result = ''
        for (let i = 0; i < text.length; i++) {
            if(text[i].match(/^[A-Za-z]{1}$/)) {
                var textChar = text[i]
                if(text[i].match(/^[A-Z]{1}$/)){
                    result += String.fromCharCode(((textChar.charCodeAt(0) + parseInt(shift) - 65) % 26) + 65)                    
                } else {
                    result += String.fromCharCode(((textChar.charCodeAt(0) + parseInt(shift) - 97) % 26) + 97)                    
                }    
            } else {
                result += ' '
            }               
        }
        return result
    }
}

