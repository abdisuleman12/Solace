myApp.controller('ThankyouController', function ($http, $location, UserService) {
    console.log('Thankyou controller created');
    var vm = this;

    vm.userService = UserService;
    vm.userObject = UserService.userObject;

    



});