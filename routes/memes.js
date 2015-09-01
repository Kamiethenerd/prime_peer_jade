var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var json = require('../models/memes');
var messages =require('../models/messages');
var parser = require('body-parser');

var file = path.join(__dirname,"../models/messages.JSON");

// get messages JSON file

var routerGet = router.get('/messages', function(req, res, next){

    fs.readFile(file, 'utf8', function (err, data) {
        if (err) return console.log(err);
        var getJson = JSON.parse(data);
        res.send(getJson);
    });
});

// renders page with JSON data
router.get('/', function(req, res, next){

    fs.readFile(file, 'utf8', function (err, data) {
        if (err) return console.log(err);
        var getJson = JSON.parse(data);
        res.render('memes', {title: 'Haters Gonna Hate', haters: json, messages: getJson});
    });
});

// post added content to JSON file

router.post('/', function(req, res, next) {

    console.log("sending message");

    var id = req.body.id;
    var newMessage = req.body.newMessage;

    fs.readFile(file, 'utf8', function (err, data) {
        if (err) return console.log(err);
        var newArray = JSON.parse(data);

        for (i = 0; i < newArray.length; i++) {

            if (id == newArray[i].name) {
                newArray[i].message = newArray[i].message + "\n\n" + newMessage;
            }
        }

        fs.writeFile(file, JSON.stringify(newArray) , 'utf-8', function (err) {
            if (err) return console.log(err);
            console.log('Wrote Data');
        });
    });

    //res.render('memes');
});

module.exports = router;