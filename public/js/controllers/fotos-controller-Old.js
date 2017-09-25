//controller da view principal que disponibiliza uma lista de controllers
angular.module("alurapic").controller("FotosController", function($scope, $http, $resource) {
    $scope.fotos = [];
    $scope.filtro = "";
    $scope.mensagem = "";

    $http.get("v1/fotos").then(successCallback, errorCallback)
    function successCallback(fotos) {
      $scope.fotos = fotos.data; //precisa usar o .data no final pra trazer os dados da API.
    }
    function errorCallback(error) {
      console.log(error);
    }

    $scope.remover = function(foto) {
      $http.delete("/v1/fotos/" + foto._id).then(function successCallback() {
          var indiceFoto = $scope.fotos.indexOf(foto);
          $scope.fotos.splice(indiceFoto, 1);
          $scope.mensagem = 'Foto' + foto.titulo + ' foi removida com sucesso!';
        }),
        function errorCallback(error) {
          console.log("Não foi possível remover a foto" + foto.titulo);
          $scope.mensagem = 'Não foi possível remover ' + foto.titulo;
        };
    }
  });