var express = require('express'),
    router = express.Router()

router.get('/ceaser', (req, res) => {
  return res.send('hello ceaser');
})

router.get('/rot13', (req, res) => {
  return res.send('hello rot13');
})

module.exports = router;