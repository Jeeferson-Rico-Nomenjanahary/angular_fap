angular.module('common.services')
.factory('utilisateur', function ($http,conf,$rootScope) {
  var factory = {};
    factory.connexion = function (userAuth) {
    return $http.post(conf.entryPoint.trim() + 'login', userAuth);
  };
  return factory;
});