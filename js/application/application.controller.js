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
        }, function (error) {
            $scope.alerts.push({ msg: 'Une erreur est survenue', type: 'danger' });
        });
    });
