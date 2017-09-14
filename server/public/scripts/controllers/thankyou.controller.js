myApp.controller('ThankyouController', function ($http, $location, UserService) {
    console.log('Thankyou controller created');
    var vm = this;
    UserService.getuserinformation()
    vm.userService = UserService;
    vm.userObject = UserService.userObject;
    vm.userInformationObject = UserService.userInformationObject





});