myApp.controller('ThankyouController', function ($http, $location, UserService, NgMap) {
    console.log('Thankyou controller loaded');
    var vm = this;

UserService.getUserLocation();
    // UserService.getUserInformation();
    

    // vm.userService = UserService;
    vm.userObject = UserService.userObject;
    // vm.userInformationObject = UserService.userInformationObject
    vm.userLocation = UserService.userLocation
    vm.markerLocationLongitude = vm.userLocation.coordinates[0].longitude;
    vm.markerLocationLatitude = vm.userLocation.coordinates[0].latitude;
//  vm.markerLocation = ['45.082127000', '-93.227247000'];

    // console.log('coordinates', vm.markerLocationLongitude, vm.markerLocationLatitude  )
    console.log('coordinate', UserService.userLocation);

    


    // console.log('coordinates', vm.userLocation[0].longitude, vm.userLocation[0].latitude);
    





    // vm.location = [vm.userInformationObject.list[0].latitude, vm.userInformationObject.list[0].longitude]







});