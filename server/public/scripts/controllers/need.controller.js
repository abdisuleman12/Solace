myApp.controller('NeedController', function ($http, $location, UserService) {
    console.log('need controller created');
    var vm = this;

    // UserService.getUserInformation();



    vm.userNeed = {
        groceries: [],
    };

    vm.needs = {
        list: ['none','groceries', 'clothing', 'household products', 'over-the-counter medicine'],
    };

    vm.addingNeeds = function () {
        vm.userNeed.user_id = UserService.userObject.details.user_id
        console.log('sending these needs', vm.userNeed);
        UserService.userNeeds(vm.userNeed)
    };

});