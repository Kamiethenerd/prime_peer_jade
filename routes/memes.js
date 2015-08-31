/**
 * Created by kamiekehrwald on 8/31/15.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('memes');
});

module.exports = router;