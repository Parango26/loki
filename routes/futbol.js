var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/getInfo', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;