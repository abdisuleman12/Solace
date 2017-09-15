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

router.get('/userinformation', function (req, res, next) {

  pool.connect(function (err, client, done) {
    if (err) {
      console.log("Error connecting: ", err);
      res.sendStatus(500);
    }
    client.query("SELECT * FROM userprofileinformation",
      function (err, result) {
        client.end();
        if (err) {
          console.log("Error getting data: ", err);
          res.sendStatus(500);
        } else {
          res.send(result.rows);
        }
      });
  });

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

// adds user profile information to database
router.post('/userprofileinformation', function (req, res, next) {
  console.log('request coming in from user controller' , req.body)
  
  
  var saveUserNeedInfo = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    address: req.body.address.formatted_address,
    longitude: req.body.address.longitude,
    latitude: req.body.address.latitude,
    householdsize: req.body.householdsize,
    phonenumber: req.body.phonenumber
  };
  console.log('user profile information :', saveUserNeedInfo);

  pool.connect(function (err, client, done) {
    if (err) {
      console.log("Error connecting: ", err);
      res.sendStatus(500);
    }
    client.query("INSERT INTO userprofileinformation (firstname, lastname, address, longitude, latitude, householdsize, phonenumber) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [saveUserNeedInfo.firstname, saveUserNeedInfo.lastname, saveUserNeedInfo.address, saveUserNeedInfo.longitude, saveUserNeedInfo.latitude, saveUserNeedInfo.householdsize, saveUserNeedInfo.phonenumber],
      function (err, result) {
        client.end();

        if (err) {
          console.log("Error inserting user profile information: ", err);
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
        }
      });
  });

});

router.post('/userneeds', function (req, res, next) {

  var saveUserNeeds = {
    need: req.body.need,
    chicken: req.body.chicken,
    beef: req.body.beef,
    vegetables: req.body.vegetables,
    milk: req.body.milk
  };
  console.log('user needs :', saveUserNeeds);

  pool.connect(function (err, client, done) {
    if (err) {
      console.log("Error connecting: ", err);
      res.sendStatus(500);
    }
    client.query("INSERT INTO userneeds (need, chicken, beef, vegetables, milk) VALUES ($1, $2, $3, $4, $5)",
      [saveUserNeeds.need, saveUserNeeds.chicken, saveUserNeeds.beef, saveUserNeeds.vegetables,saveUserNeeds.milk],
      function (err, result) {
        client.end();

        if (err) {
          console.log("Error inserting userneeds: ", err);
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
        }
      });
  });

});


module.exports = router;
