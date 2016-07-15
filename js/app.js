var app = angular
.module('myApp',
  [
      'ngRoute',
      'ui.bootstrap',
      'googlechart',
      'ui.select',
      'ngProgress',
      'common.modules',
      'common.services',
      'common.directives',
      'common.filters',
      'GlobalConfig'
  ]
)
.controller('MainCtrl', function ($scope, $window, conf, utilisateur) {
    $scope.disconnect = function () {
        sessionStorage.removeItem("UserConnected");
        $window.location.href = conf.site+'login.html';
    };


})
.config(function ($routeProvider, $httpProvider) {
   var viewsFolder = "../views/";

    $routeProvider
    .when('/', { templateUrl: 'home.view.html', controller: 'home' })
    .when('/applications', { templateUrl: 'application.view.html', controller: 'applicationCtrl' })
    .when('/applications/create', { templateUrl: 'application.create.view.html', controller: 'applicationCtrl' })
        .when('/applications/update/:id', { templateUrl: 'application.update.view.html', controller: 'applicationCtrl' })
    .otherwise({ redirectTo: '/' });

    //Enable cross domain calls
    //$httpProvider.defaults.useXDomain = true;
    //$http.useXDomain = true;
})
.run(function ($rootScope, menu, $window,conf) {
    $rootScope.$on("$routeChangeSuccess", function (event, data) {
        $rootScope.controller = data.controller;
    });

    $rootScope.isMenuOpen = true;
    $rootScope.menu = menu;

    $rootScope.alerts = [];
    $rootScope.$on('newAlert', function(event, args){
        $rootScope.alerts.push(args);
    });

    $rootScope.closeAlert = function(index) {
        $rootScope.alerts.splice(index, 1);
    };

    $rootScope.setCollapse = function (data, item) {
        var itemClosed = item.closed;
        angular.forEach(data, function (d) {
            d.closed = true;
        });
        item.closed = !itemClosed;
    };

    $rootScope.toggleSideBar = function () {
        var pageContent = angular.element(document.getElementsByClassName("page-content"));

        if(pageContent.hasClass('toggled')) {
            pageContent.removeClass('toggled');
            $rootScope.isMenuOpen = true;
        } else {
            pageContent.addClass('toggled');
            $rootScope.isMenuOpen = false;
        }
    };

    var strUserConnected = sessionStorage.getItem("UserConnected");
    if (strUserConnected == null) {
        $window.location.href = conf.site+'login.html';
    }

    $rootScope.userConnected = JSON.parse(strUserConnected);
    $rootScope.header = {
        headers: {
            'Authorization': $rootScope.userConnected.records.api_key
            //'password': $rootScope.userConnected.user.password,
            //'login': $rootScope.userConnected.user.login
        }
    }


})
;
