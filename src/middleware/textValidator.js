module.exports =  {
    hasSpecialSymbols: function(req, res, next) {
        var noSymbolRegex = new RegExp(/^[A-Za-z ]*$/)
        
        var text = req.query.text
        
        if(!noSymbolRegex.test(text)) {                      
            err = new Error("You can only use text without special symbols.")
            next(err)
        }
        
        return next();
    }
}