myApp.controller('ThankyouController', function ($http, $location, UserService, NgMap) {
    console.log('Thankyou controller loaded');
    var vm = this;

    UserService.getUserInformation();
    UserService.getUserNeeds();

    // vm.userService = UserService;
    vm.userObject = UserService.userObject;
    vm.userInformationObject = UserService.userInformationObject
    vm.userLocation = UserService.userLocation;
    vm.userNeeds = UserService.userNeeds
    // vm.markerLocationLongitude = vm.UserService.userLocation.coordinates[0].longitude;
    // vm.markerLocationLatitude = vm.UserService.userLocation.coordinates[0].latitude;

    vm.map = {};
    NgMap.getMap("map").then(function (map) {
        console.log('this is that map', map);
        vm.map = map;
    });

    vm.showDeets = function (e, user) {
        vm.userInformationObject.user = user
        console.log('user information object in show deets', vm.userInformationObject.user)
        vm.map.showInfoWindow('InfoWindow', this)
    }


    // vm.markerLocationLongitude = vm.longitude;
    // vm.markerLocationLatitude = vm.latitude;

    console.log('coordinate', UserService.userLocation);
    console.log('user information', vm.userInformationObject)
    console.log('user needs', vm.userNeeds.needs)


});