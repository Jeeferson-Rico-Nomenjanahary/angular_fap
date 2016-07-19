/**
 * Created by Dev on 18/07/2016.
 */
angular.module('common.services')
    .factory('tagFactory', function ($http,conf,$rootScope,$q) {
        var factory = {}
        factory.getTags = function() {
            return $http.get(conf.entryPoint.trim() + 'tags', $rootScope.header)
        };
        factory.deleteTag=function(idToDelete){
            return $http.delete(conf.entryPoint.trim()+'tags/'+idToDelete, $rootScope.header);
        }
        factory.createTag= function (tag) {
            return $http.post(conf.entryPoint.trim() + 'tags',tag, $rootScope.header)
        }
        factory.updateTag= function (idToUpdate,tag) {
            return $http.put(conf.entryPoint.trim() + 'tags/'+idToUpdate,tag, $rootScope.header)
        }
        factory.linkToApplication= function(idAppToLink,tagsId){
            return $http.post(conf.entryPoint.trim() + 'application_tags/'+idAppToLink,tagsId, $rootScope.header)
        }
        return factory;
    });

