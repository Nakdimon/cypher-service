var express = require('express')
var caesarCypherService = require('../services/caesarCypherService')
var rot13CypherService = require('../services/rot13CypherService')
var { hasSpecialSymbols, isPositiveInteger }  = require('../middleware/textValidator')


var router = express.Router();

router.get('/caesar', hasSpecialSymbols, isPositiveInteger, (req, res) => {    
    var result = caesarCypherService.caesarCypher(req.body.text, req.body.shift)
    res.send(result)
})

router.get('/rot13', hasSpecialSymbols, isPositiveInteger, (req, res) => {
    var result = rot13CypherService.rot13Cypher(req.body.text, req.body.shift)
    res.send(result)
})

router.use((err, req, res) => {
    if (err) {
        console.log(err)
        res.send(err)
    }  
})

module.exports = router