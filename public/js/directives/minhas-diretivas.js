angular.module('minhasDiretivas', ['meusServicos'])
    //Diretiva do Painel principal principal.html
    .directive('meuPainel', function () {
        var ddo = {};
        ddo.restrict = "AE"; //AE = Atribute and Expression
        ddo.scope = {
            titulo: '@',
            subtitulo: '@',
            descricao: '@'
        };
        ddo.transclude = true;
        ddo.templateUrl = 'js/directives/meu-painel.html';
        return ddo;
    })
    //Diretiva do carregamento da imagem no cadastro foto.html
    .directive('minhaFoto', function () {
        var ddo = {};
        ddo.restrict = "AE";
        ddo.scope = {
            titulo: '@',
            url: '@'
        };
        ddo.template = '<img class="img-fluid center-block" ng-src="{{url}}" alt="{{titulo}}">';
        return ddo;
    })
    //Diretiva para o botao remover.
    .directive('meuBotaoPerigo', function () {
        var ddo = {}
        ddo.restrict = "E";
        ddo.scope = {
            nome: '@', // @ para receber uma string como parametro
            acao: '&' //& para receber uma expressao como parametro
        };
        ddo.template = '<button href="" class="btn btn-outline-danger card-link" ng-click="acao(foto)">{{nome}}</button>';
        return ddo;
    })
    //Diretiva para foco no botão Voltar depois de cadastrar ou editar uma foto
    .directive('meuFocus', function () {
        var ddo = {};
        ddo.restrict = "A";
        ddo.link = function(scope, element) {
            //ativa o evento de focus (criado no foto-controller.js) no botao voltar com o $on
            scope.$on('fotoCadastrada', function() {
                element[0].focus();
            });
        };
        return ddo;
        })
   .directive('meusTitulos', function() {
        var ddo = {};
        ddo.restrict = 'AE';
        ddo.templateUrl = 'js/directives/meus-titulos.html';
        ddo.controller = function($scope, recursoFoto) {
            recursoFoto.query(function(fotos) {
                $scope.titulos = fotos.map(function(foto) {
                    return foto.titulo;
                });
            });
        };
        return ddo;
    });





