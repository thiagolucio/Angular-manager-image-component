//controller da view principal que disponibiliza uma lista de controllers
angular.module("alurapic").controller("FotosController", function($scope, recursoFoto) {
    $scope.fotos = [];
    $scope.filtro = "";
    $scope.mensagem = "";

    recursoFoto.query(function(fotos){
      $scope.fotos = fotos; //? porque neste caso nao precisa de data no final?
    }, function(erro) {
      console.log(erro);
    });

    $scope.remover = function(foto) {
      recursoFoto.delete({fotoId : foto._id}, function() {
        var indiceFoto = $scope.fotos.indexOf(foto);
        $scope.fotos.splice(indiceFoto, 1);
        $scope.mensagem = 'Foto' + foto.titulo + ' foi removida com sucesso!';
      }, function(erro) {
        console.log(erro);
        $scope.mensagem = 'Não foi possível remover ' + foto.titulo;
      });
    };
  });