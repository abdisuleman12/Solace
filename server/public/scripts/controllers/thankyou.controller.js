myApp.controller('ThankyouController', function ($http, $location, UserService, NgMap) {
    console.log('Thankyou controller loaded');
    var vm = this;
    UserService.getuserinformation();
    vm.userService = UserService;
    vm.userObject = UserService.userObject;
    vm.userInformationObject = UserService.userInformationObject


    
//  vm.location =  [ vm.userInformationObject.list[0].latitude , vm.userInformationObject.list[0].longitude ]

//  console.log(vm.location);
 




});