/**
 * Created by Dev on 15/07/2016.
 */
angular.module('common.services')
    .factory('applicationFactory', function ($http,conf,$rootScope,$q) {
        var factory = {}
        factory.getApplications = function() {
            return $http.get(conf.entryPoint.trim() + 'applications', $rootScope.header)
        };
        factory.getApplication = function(id) {
            var deferred = $q.defer();
            var application = {};
            application = factory.getApplications().then(function(applications){
                angular.forEach(applications, function(value, key) {
                    console.log(value);
                });
                deferred.resolve(application);
            },function(msg){
                deferred.reject(msg);
            })
            return deferred.promise;
        };
        factory.deleteApplication=function(idToDelete){
            return $http.delete(conf.entryPoint.trim()+'applications/'+idToDelete, $rootScope.header);
        }
        factory.createApplication= function (application) {
            return $http.post(conf.entryPoint.trim() + 'applications',application, $rootScope.header)
        }

        return factory;
    });