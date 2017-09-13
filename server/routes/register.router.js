var express = require('express');
var router = express.Router();
var path = require('path');
var pool = require('../modules/pool.js');
var encryptLib = require('../modules/encryption');

// Handles request for HTML file
router.get('/', function (req, res, next) {
  console.log('get /register route');
  res.sendFile(path.resolve(__dirname, '../public/views/templates/register.html'));
});

// Handles POST request with new user data
// Handles POST request with new user data
router.post('/', function (req, res, next) {

  var saveUser = {
    username: req.body.username,
    password: encryptLib.encryptPassword(req.body.password),
  };
  console.log('new user:', saveUser);

  pool.connect(function (err, client, done) {
    if (err) {
      console.log("Error connecting: ", err);
      res.sendStatus(500);
    }
    client.query("INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id",
      [saveUser.username, saveUser.password],
      function (err, result) {
        client.end();

        if (err) {
          console.log("Error inserting data: ", err);
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
        }
      });
  });

});


router.post('/userneedinformation', function (req, res, next) {

  var saveUserNeedInfo = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    address: req.body.address,
    householdsize: req.body.householdsize,
    phonenumber: req.body.phonenumber
  };
  console.log('user need informatin :', saveUserNeedInfo);

  pool.connect(function (err, client, done) {
    if (err) {
      console.log("Error connecting: ", err);
      res.sendStatus(500);
    }
    client.query("INSERT INTO userneedinformation (firstname, lastname, address, householdsize, phonenumber) VALUES ($1, $2, $3, $4, $5)",
      [saveUserNeedInfo.firstname, saveUserNeedInfo.lastname, saveUserNeedInfo.address, saveUserNeedInfo.householdsize, saveUserNeedInfo.phonenumber],
      function (err, result) {
        client.end();

        if (err) {
          console.log("Error inserting user need information: ", err);
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
        }
      });
  });

});


module.exports = router;
