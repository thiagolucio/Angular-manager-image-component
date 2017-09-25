angular.module('meusServicos',['ngResource']).factory('recursoFoto', function ($resource) {

    return $resource('/v1/fotos/:fotoId', null, {
      update: {
        method: 'PUT'
      }
    });

})//final Factory recursoFoto

.factory('cadastroDeFotos', function(recursoFoto, $q, $rootScope) {
    var service = {};
    var eventoFotoCadastrada = 'fotoCadastrada';

    service.cadastrar = function(foto) {
        return $q(function(resolve, reject) {
            //Aqui caso a foto seja editada, uma foto existente
            if(foto._id) {
                recursoFoto.update({fotoId : foto._id}, foto, function() {
                     $rootScope.$broadcast(eventoFotoCadastrada); //quando salvar uma foto vai disparar o evento fotoCadastrada pra ativar o foco no botao voltar
                    resolve({
                        mensagem : 'Foto' + foto.titulo + ' atualizado com sucesso!',
                        inclusao : false
                    });
                }, function(erro) {
                    console.log(erro);
                    reject({
                        mensagem : 'Não foi possível incluir a foto' + foto.titulo
                    });
                });
            }else {
                //Aqui caso seja cadastrada uma nova foto
                recursoFoto.save(foto, function() {
                     $rootScope.$broadcast(eventoFotoCadastrada); //quando salvar uma foto vai disparar o evento fotoCadastrada pra ativar o foco no botao voltar
                    resolve({
                        mensagem : 'Foto' + foto.titulo + ' atualizado com sucesso!',
                        inclusao : false
                    });
                }, function(erro) {
                    console.log(erro);
                   reject({
                       mensagem : 'Não foi possível incluir a foto' + foto.titulo
                   });
                });
            }
        });
    };
    return service;
}); // final factory cadastroDeFotos