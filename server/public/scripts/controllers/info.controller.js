myApp.controller('InfoController', function(UserService) {
  console.log('InfoController created');
  var vm = this;

  UserService.getuserinformation();
  
  vm.userService = UserService;
  vm.userObject = UserService.userObject
  vm.userInformation = UserService.userInformationObject
});
