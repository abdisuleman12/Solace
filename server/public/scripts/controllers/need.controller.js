myApp.controller('NeedController', function ($http, $location, UserService) {
    console.log('need controller created');
    var vm = this;

    vm.userNeed = {};

    vm.needs = {
        list: ['Food', 'Clothing', 'Medicine', 'Water']
    };


});