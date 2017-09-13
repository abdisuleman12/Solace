myApp.controller('NeedController', function ($http, $location, UserService, $mdDialog) {
    console.log('need controller created');
    var vm = this;

    vm.userNeed = { };
    
    vm.needs = {
        
        list: ['Food', 'Clothing', 'Medicine']

    };


});