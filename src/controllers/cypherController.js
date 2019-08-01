var express = require('express')
var caesarCypherService = require('../services/caesarCypherService')
var rot13CypherService = require('../services/rot13CypherService')
var { decodeRequestParam, hasSpecialSymbols, isPositiveInteger }  = require('../middleware/textValidator')


var router = express.Router();

router.get('/caesar', decodeRequestParam, hasSpecialSymbols, isPositiveInteger, (req, res) => {    
    var result = caesarCypherService.caesarCypher(res.locals.text, req.query.shift)
    res.send(result)
})

router.get('/rot13',decodeRequestParam, hasSpecialSymbols, isPositiveInteger, (req, res) => {
    var result = rot13CypherService.rot13Cypher(res.locals.text, req.query.shift)
    res.send(result)
})

router.use((err, req, res) => {
    if (err) {
        console.log(err)
        res.send(err)
    }  
})

module.exports = router