myApp.controller('UserController', function (UserService, $http) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  vm.user = {}

  vm.userInformation = function () {
    console.log('User Controller -- inside userInformation function', 
    'sending to service', vm.user)
    UserService.userProfileInformation(vm.user)
  }; // end of user information function 
}); // end of controller 





