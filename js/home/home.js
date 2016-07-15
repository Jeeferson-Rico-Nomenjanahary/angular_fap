angular.module('common.services')
.controller('home', function($scope,$rootScope, conf, $window, applicationFactory, ngProgressFactory) {
        var strUserConnected = sessionStorage.getItem("UserConnected");
        if (strUserConnected == null) {
            $window.location.href = conf.site+'login.html';
        }
        $scope.applicationCount = applicationFactory.getApplications().then(function (d) {
            $scope.applicationCount = d.data;
        }, function (error) {
            $scope.alerts.push({ msg: 'Une erreur est survenue home', type: 'danger' });
        });
});