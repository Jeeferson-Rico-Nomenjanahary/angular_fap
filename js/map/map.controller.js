/**
 * Created by Dev on 21/07/2016.
 */
angular.module('common.services',['google-maps'])
    .controller('MapCtrl', ['MarkerCreatorService', '$scope', function (MarkerCreatorService, $scope) {

    var cities = [
        {
            city : 'Toronto',
            desc : 'This is the best city in the world!',
            lat : 43.7000,
            long : -79.4000
        },
        {
            city : 'New York',
            desc : 'This city is aiiiiite!',
            lat : 40.6700,
            long : -73.9400
        },
        {
            city : 'Chicago',
            desc : 'This is the second best city in the world!',
            lat : 41.8819,
            long : -87.6278
        },
        {
            city : 'Los Angeles',
            desc : 'This city is live!',
            lat : 34.0500,
            long : -118.2500
        },
        {
            city : 'Las Vegas',
            desc : 'Sin City...\'nuff said!',
            lat : 36.0800,
            long : -115.1522
        }
    ];

    MarkerCreatorService.createByCoords(40.454018, -3.509205, function (marker) {
        marker.options.labelContent = 'Autentia';
        $scope.autentiaMarker = marker;
    });

    $scope.address = '';

    $scope.map = {
        center: {
            latitude: $scope.autentiaMarker.latitude,
            longitude: $scope.autentiaMarker.longitude
        },
        zoom: 12,
        markers: [],
        control: {},
        options: {
            scrollwheel: false
        }
    };

    $scope.map.markers.push($scope.autentiaMarker);

    $scope.addCurrentLocation = function () {
        MarkerCreatorService.createByCurrentLocation(function (marker) {
            marker.options.labelContent = 'You´re here';
            $scope.map.markers.push(marker);
            refresh(marker);
        });
    };

    $scope.addAddress = function() {
        var address = $scope.address;
        if (address !== '') {
            MarkerCreatorService.createByAddress(address, function(marker) {
                $scope.map.markers.push(marker);
                refresh(marker);
            });
        }
    };

    $scope.addCords = function() {
        var lat = $scope.latitude;
        var lng = $scope.longitude;
        if (lat !== '' && lng !='') {
            MarkerCreatorService.createByCoords(lat,lng, function(marker) {
                $scope.map.markers.push(marker);
                refresh(marker);
            });
        }
    };

    $scope.allCities = function(){
        for (i = 0; i < cities.length; i++){

            var lat = cities[i].lat;
            var lng = cities[i].long;
            if (lat !== '' && lng !='') {
                MarkerCreatorService.createByCoords(lat,lng, function(marker) {
                    $scope.map.markers.push(marker);
                    refresh(marker);
                });
            }
        }
    };

    function refresh(marker) {
        $scope.map.control.refresh({latitude: marker.latitude,
            longitude: marker.longitude});
    }




}]);
