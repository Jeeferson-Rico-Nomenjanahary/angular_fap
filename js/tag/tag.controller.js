/**
 * Created by Dev on 18/07/2016.
 */
angular.module('common.services')
    .controller('tagCtrl', function($scope,$rootScope, conf, $window, tagFactory, ngProgressFactory) {


        $scope.tags = tagFactory.getTags().then(function (d) {
            $scope.tags = d.data.records;
            $scope.result = d.data.result.message;
            angular.forEach($scope.tegs, function(value, key) {
                $scope.ArrayTag.push(value);
            });
        }, function (error) {
            $scope.alerts.push({ msg: 'Une erreur est survenue', type: 'danger' });
        });
        $scope.createTagForApp = function(idx){
            tag = {
                name : $scope.tag_name
            }
            var app_to_link = $scope.ArrayApp[idx];

            tagFactory.createTag(tag).then(
                function(data){
                    //console.log(data);
                    id_app = app_to_link.id;
                    idTag  = data.data.records.id;
                    linkToApp(id_app,idTag);
                    $scope.ArrayTag[idx].push(data.data.records);
                    $scope.alerts.push({ msg: 'Vos données ont été enregister', type: 'success' });
                    console.log($scope.ArrayTag)

                },
                function(error){
                    $scope.alerts.push({ msg: 'Une erreur est survenue', type: 'danger' });
                }
            )
            $scope.tag_name ='';
        }
        $scope.deleteTag = function(idx){
            var tag_to_delete = $scope.ArrayTag[idx];
            tagFactory.deleteTag(tag_to_delete.id).then(
                function(d){
                    $scope.ArrayTag.splice(idx, 1);
                    $scope.alerts.push({ msg: 'supprimer avec succes', type: 'success' });
                },function(erroor){
                    $scope.alerts.push({ msg: 'Une erreur est survenue', type: 'danger' });
                }
            )
        }
        $scope.updateTag = function(idx){
            var tag_to_update = $scope.ArrayTag[idx];
            tag = {
                name : tag_to_update.name
            }
            tagFactory.updateTag(tag_to_update.id,tag).then(
                function(data){
                    $scope.alerts.push({ msg: 'Vos données ont été enregister', type: 'success' });
                },
                function(error){
                    $scope.alerts.push({ msg: 'Une erreur est survenue', type: 'danger' });
                }
            )
        }
        linkToApp = function(idAppToLink,idTag){
            obj = {
                tags_id : [
                    {
                        id : idTag
                    }
                ]
            }
            tagFactory.linkToApplication(idAppToLink,obj).then(
                function(data){
                    $scope.alerts.push({ msg: 'Vos données ont été enregister', type: 'success' });
                },
                function(error){
                    $scope.alerts.push({ msg: 'Une erreur est survenue', type: 'danger' });
                }
            )
        }
    });