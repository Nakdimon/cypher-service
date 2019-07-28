module.exports  = {
    caesarCypher: function (text = 'default', shift = 4) {
        var result = ''
        for (let i = 0; i < text.length; i++) {
            if(text[i].match(/[a-zA-Z]{1}/g)) {
                if(text[i] == text[i].toUpperCase()){
                    result += String.fromCharCode((text.charCodeAt(i) + shift - 65) % 26 + 65)
                } else {
                    result += String.fromCharCode((text.charCodeAt(i) + shift - 97) % 26 + 97)
                }    
            } else {
                result += ' '
            }               
        }
        return result
    }
}

