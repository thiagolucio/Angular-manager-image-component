angular.module("alurapic")
  .controller("FotoController", function($scope, $http, $routeParams) {
    $scope.foto = {};
    $scope.mensagem = "";

    if ($routeParams.fotoId) {
      $http.get("/v1/fotos/" + $routeParams.fotoId).then(successCallback, errorCallback)

      function successCallback(foto) {
        $scope.foto = foto.data;
      }

      function errorCallback(erro) {
        console.log(erro);
        $scope.mensagem = "Não foi possível obter a foto";
      };
    }

    $scope.submeter = function() {

      if ($scope.formulario.$valid) {
        if ($routeParams.fotoId) {
          $http.put("/v1/fotos/" + $scope.foto._id, $scope.foto).then(successCallback, errorCallback)

          function successCallback() {
            $scope.mensagem = "Foto " + $scope.foto.titulo + " foi alterada";
          }

          function errorCallback(erro) {
            console.log(erro);
            $scope.mensagem = "Não foi possível alterar a foto " + $scope.foto.titulo;
          };
        } else {
          $http.post("/v1/fotos", $scope.foto).then(successCallback, errorCallback)

          function successCallback() {
            $scope.foto = {};
            $scope.mensagem = "Foto cadastrada com sucesso";
          }

          function errorCallback(erro) {
            console.log(erro);
            $scope.mensagem = "Não foi possível cadastrar a foto";
          };
        }
      }
    };
  });
