/**
 * Created by Dev on 15/07/2016.
 */
angular.module('common.services')
    .factory('applicationFactory', function ($http,conf,$rootScope,$q) {
        var factory = {}
        factory.getApplications = function() {
            return $http.get(conf.entryPoint.trim() + 'applications', $rootScope.header)
        };
        factory.deleteApplication=function(idToDelete){
            return $http.delete(conf.entryPoint.trim()+'applications/'+idToDelete, $rootScope.header);
        }
        factory.createApplication= function (application) {
            return $http.post(conf.entryPoint.trim() + 'applications',application, $rootScope.header)
        }

        return factory;
    });