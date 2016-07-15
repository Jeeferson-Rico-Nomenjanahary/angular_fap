/**
 * Created by Dev on 15/07/2016.
 */
angular.module('common.services')
    .controller('applicationCtrl', function($scope,$rootScope, conf, $window, applicationFactory, ngProgressFactory) {
        var strUserConnected = sessionStorage.getItem("UserConnected");
        if (strUserConnected == null) {
            $window.location.href = conf.site+'login.html';
        }
        $rootScope.userConnected = JSON.parse(strUserConnected);

        $scope.applications = applicationFactory.getApplications().then(function (d) {
            $scope.applications = d.data.records;
            $scope.result = d.data.result.message;
            $scope.ArrayApp = [];
            angular.forEach($scope.applications, function(value, key) {
                $scope.ArrayApp.push(value);
            });
        }, function (error) {
            $scope.alerts.push({ msg: 'Une erreur est survenue', type: 'danger' });
        });

        $scope.create = function(){
            application = {
                title : $scope.title,
                web : $scope.web,
                slogan : $scope.slogan
            }
            applicationFactory.createApplication(application).then(
                function(data){
                    $scope.alerts.push({ msg: 'Vos données ont été enregister', type: 'success' });
                },
                function(error){
                    $scope.alerts.push({ msg: 'Une erreur est survenue', type: 'danger' });
                }
            )
        }
        $scope.deleteApp = function(idx){
            var app_to_delete = $scope.ArrayApp[idx];
            console.log(app_to_delete);
            applicationFactory.deleteApplication(app_to_delete.id).then(
                function(d){
                    $scope.ArrayApp.splice(idx, 1);
                    $scope.alerts.push({ msg: 'supprimer avec succes', type: 'success' });
                },function(erroor){
                    $scope.alerts.push({ msg: 'Une erreur est survenue', type: 'danger' });
                }
            )
        }
    });
