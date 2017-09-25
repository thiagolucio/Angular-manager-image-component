angular.module('alurapic').controller('GruposController', function ($scope, $http) {
    $scope.grupos = [];

    $http.get('v1/grupos').then(successCallBack, errorCallBack)
    function successCallBack(grupos) {
        $scope.grupos = grupos.data;
    }
    function errorCallBack(erro) {
        console.log(erro);
    }
});