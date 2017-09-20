var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMap', 'checklist-model']);

/// Routes ///
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config')
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as lc',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    }).when('/need', {
      templateUrl: '/views/templates/need.html',
      controller: 'NeedController as nc',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    }).when('/thankyou', {
      templateUrl: '/views/templates/thankyou.html',
      controller: 'ThankyouController as tc',
       resolve: {
      //   getUserInformation: function (UserService) {
      //     return UserService.getUserInformation();
      //   }, 
        getUserLocation: function (UserService) {
          return UserService.getUserLocation();
        }
      }
    }).when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'InfoController as ic',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .otherwise({
      redirectTo: 'home'
    });

}); // end of congiq 
