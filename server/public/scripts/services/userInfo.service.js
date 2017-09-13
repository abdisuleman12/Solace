




console.log('User Controller -- inside userNeedInfromation function', vm.user)
$http.post('/register/userneedinformation', vm.user).then(function (response) {
console.log('UserController -- registeruserneedinfo -- success');
