var express = require('express')
var caesarCypherService = require('../services/caesarCypherService')
var rot13CypherService = require('../services/rot13CypherService')

var router = express.Router();

router.get('/caesar', (req, res) => {
    var result = caesarCypherService.caesarCypher(req.query.text, req.query.shift)
    res.send(result)
})

router.get('/rot13', (req, res) => {
    var result = rot13CypherService.rot13Cypher(req.query.text, req.query.shift)
    res.send(result)
})

module.exports = router