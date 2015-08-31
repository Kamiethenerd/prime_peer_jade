var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var json = require('../models/memes');
var messages =require('../models/messages');
var parser = require('body-parser');


// pulls JSON data
router.get('/', function(req, res, next){
    console.log(messages,json);
    res.render('memes', {title: 'Haters Gonna Hate', haters: json, messages:messages});

});

router.post('/', function(req, res, next){
    console.log("sending message");
    var id = req.body.id;
    var newMessage = req.body.newMessage;

    res.send(id + ", " + newMessage);

});

module.exports = router;