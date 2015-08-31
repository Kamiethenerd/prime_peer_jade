var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var json = require('../models/memes');

// pulls JSON data
router.get('/', function(req, res, next){
    res.render('memes', {title: 'Haters Gonna Hate', haters: json});
});

module.exports = router;