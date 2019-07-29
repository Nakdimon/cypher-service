module.exports =  {
    hasSpecialSymbols: function(req, res, next) {
        var noSymbolRegex = new RegExp(/^[A-Za-z ]*$/)
        
        var text = req.query.text
        
        if(!noSymbolRegex.test(text)) {                      
            err = new Error("You can only use text without special symbols.")
            res.send("You can only use text without special symbols.")
            next(err)
        }
        
        return next();
    },
    isPositiveInteger: function (req, res, next) {
        var shift = req.query.shift
        if(!(Number.isInteger(shift)&&shift>=0)) {
            err = new Error("Shift can only be a positive integer.")
            res.send("Shift can only be a positive integer.")
            next(err)
        }
    }
}