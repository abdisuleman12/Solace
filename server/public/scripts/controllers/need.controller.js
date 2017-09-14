myApp.controller('NeedController', function ($http, $location, UserService) {
    console.log('need controller created');
    var vm = this;

    vm.userNeed = {};

    vm.needs = {
        list: ['Food']
    };

    vm.addingNeeds = function () {
        console.log('sending these needs', vm.userNeed);
        UserService.userNeeds(vm.userNeed)
    };

});