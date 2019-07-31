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
        if(req.query.shift) {
            var shift = !isNaN(req.query.shift) ? parseInt(req.query.shift) : -1
            if(!(!isNaN(shift)&&Number.isInteger(shift)&&shift>=0)) {
                console.log(shift)
                err = new Error("Shift can only be a positive integer.")
                res.send("Shift can only be a positive integer.")
                next(err)
            }
        }
        
        return next();
    }
}