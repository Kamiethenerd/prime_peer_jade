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

var file = path.join(__dirname,"../models/messages.JSON");
var newArray;

fs.readFile(file, 'utf8', function (err, data) {
    if (err) return console.log(err);
    var msgJson = JSON.parse(data);
    console.log(msgJson);
    newArray = msgJson;
    console.log(newArray);
    return newArray;
});


router.post('/', function(req, res, next) {



    console.log("sending message");


    var id = req.body.id;
    var newMessage = req.body.newMessage;
    //var obj = {name: id, message: newMessage};
    //var newJson = msgJson.push(obj);
    //console.log(newJson);

    for (i = 0; i < newArray.length; i++) {

        if (id == newArray[i].name) {
            newArray[i].message = newArray[i].message + "\n\n" + newMessage;
        }
    }


    fs.writeFile(file, JSON.stringify(newArray) , 'utf-8', function (err) {
        if (err) return console.log(err);
        console.log('Wrote Data');
    });


    res.send(id + ", " + newMessage);

});

module.exports = router;