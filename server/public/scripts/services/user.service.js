myApp.service('UserService', function ($http, $location) {
  console.log('UserService Loaded');

  var self = this;

  self.userObject = {};

  self.userInformationObject = { list: [] };

  self.getuser = function () {
    console.log('UserService -- getuser');
    $http.get('/user').then(function (response) {
      if (response.data.username) {
        // user has a curret session on the server
        self.userObject.userName = response.data.username;
        console.log('UserService -- getuser -- User Data: ', self.userObject);
      } else {
        console.log('UserService -- getuser -- failure');
        // user has no session, bounce them back to the login page
        $location.path("/home");
      }
    }, function (response) {
      console.log('UserService -- getuser -- failure: ', response);
      $location.path("/home");
    });

  }; // end of get user 


// get user information 
  self.getuserinformation = function () {
    $http.get('/register/userinformation').then(function (response) {
      console.log('response from get user information', response)
      self.userInformationObject.list = response.data.rows
    })
  }; // end of get user 



  self.userProfileInformation = function (information) {
    console.log('sending information to db', information)
    $http.post('/register/userneedinformation', information).then(function (response) {
      console.log(' post response from register/userneedinformation', response)
      $location.path('/need')
    });
  } // end of user need information 

  self.userNeeds = function (userneeds) {
    console.log('sending these user needs to db ', userneeds)
    $http.post('/register/userneeds', userneeds).then(function (response) {
      console.log('post response from register/userneeds', response)
      $location.path('/thankyou')
    });
  };

  self.logout = function () {
    console.log('UserService -- logout');
    $http.get('/user/logout').then(function (response) {
      console.log('UserService -- logout -- logged out');
      $location.path("/home");
    });

  }; // end of logout 

});
