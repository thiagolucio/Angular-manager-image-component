// Este é o arquivo modulo principal
angular.module('alurapic', [
    'minhasDiretivas',
    'ngAnimate',
    'ngRoute',
    'meusServicos'
    ]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    //para nao adicionar caracteres na url do browser
    $locationProvider.hashPrefix('');

    $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosController',
        controllerAs: 'principal'
    });

    $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'
    });

    $routeProvider.when('/fotos/edit/:fotoId', {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'
    });

    //se usar este comando tem de habilitar  <base href="/">
    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({
        redirectTo: '/fotos'
    });
}]);