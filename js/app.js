var app = angular
.module('myApp',
  [
      'ngRoute',
      'ngIdle',
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
.controller('MainCtrl', function ($scope, $window, conf, utilisateur,Idle,$modal) {
    $scope.disconnect = function () {
        sessionStorage.removeItem("UserConnected");
        $window.location.href = conf.site+'login.html';
    };
    $scope.started = false;
      function closeModals() {
        if ($scope.warning) {
          $scope.warning.close();
          $scope.warning = null;
        }

        if ($scope.timedout) {
          $scope.timedout.close();
          $scope.timedout = null;
        }
      }

      $scope.$on('IdleStart', function() {
        closeModals();

        $scope.warning = $modal.open({
          templateUrl: 'warning-dialog.html',
          windowClass: 'modal-danger'
        });
      });

      $scope.$on('IdleEnd', function() {
        closeModals();
      });

      $scope.$on('IdleTimeout', function() {
        closeModals();
         sessionStorage.removeItem("UserConnected");
        $window.location.href = conf.site+'login.html';
      });

      $scope.start = function() {
        closeModals();
        Idle.watch();
        $scope.started = true;
      };

      $scope.stop = function() {
        closeModals();
        Idle.unwatch();
        $scope.started = false;

      };


})

.config(['$routeProvider','KeepaliveProvider', 'IdleProvider',function ($routeProvider,KeepaliveProvider,IdleProvider) {
   IdleProvider.idle(5);
  IdleProvider.timeout(5);
  KeepaliveProvider.interval(10);

   var viewsFolder = "../views/";
    $routeProvider
    .when('/', { templateUrl: 'home.view.html', controller: 'home' })
    .when('/applications', { templateUrl: 'application.view.html', controller: 'applicationCtrl' })
    .when('/applications/create', { templateUrl: 'application.create.view.html', controller: 'applicationCtrl' })
    .when('/applications/update/:id', { templateUrl: 'application.update.view.html', controller: 'applicationCtrl' })
    .when('/todo-map', { templateUrl: 'test.view.html',controller: 'MapCtrl' })
    .when('/map', { templateUrl: 'simple.map.view.html',controller: 'SimpleMapCtrl' })
    .otherwise({ redirectTo: '/' });
}])
.run(['Idle','$rootScope','menu','$window','conf',function (Idle,$rootScope, menu, $window,conf) {
   Idle.watch();
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


}])
;
