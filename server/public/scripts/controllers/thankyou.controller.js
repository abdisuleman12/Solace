myApp.controller('ThankyouController', function ($http, $location, UserService, NgMap) {
    console.log('Thankyou controller loaded');
    var vm = this;


    UserService.getUserInformation();
    UserService.getUserLocation();

    vm.userService = UserService;
    vm.userObject = UserService.userObject;
    vm.userInformationObject = UserService.userInformationObject
    vm.userLocation = UserService.userLocation
    // vm.markerLocationLongitude = vm.userLocation
    // vm.markerLocationLatitude = vm.userLocation.coordinates[0].latitude;
    // vm.markerLocation = ['45.082127000', '-93.227247000'];

    console.log('coordinates', vm.userLocation)






    // vm.location = [vm.userInformationObject.list[0].latitude, vm.userInformationObject.list[0].longitude]







});