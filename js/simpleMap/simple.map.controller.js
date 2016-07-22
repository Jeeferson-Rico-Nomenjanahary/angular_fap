/**
 * Created by Dev on 22/07/2016.
 */
//Data
var cities = [
    {
        city : 'India',
        desc : 'This is the best country in the world!',
        lat : 23.200000,
        long : 79.225487
    },
    {
        city : 'New Delhi',
        desc : 'The Heart of India!',
        lat : 28.500000,
        long : 77.250000
    },
    {
        city : 'Mumbai',
        desc : 'Bollywood city!',
        lat : 19.000000,
        long : 72.90000
    },
    {
        city : 'Kolkata',
        desc : 'Howrah Bridge!',
        lat : 22.500000,
        long : 88.400000
    },
    {
        city : 'Chennai  ',
        desc : 'Kathipara Bridge!',
        lat : 13.000000,
        long : 80.250000
    },
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
angular.module('common.services')
    .controller('SimpleMapCtrl', function (MarkerCreatorService,$scope) {


        $scope.markers = [];

        $scope.map = MarkerCreatorService.init();


        $scope.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }

        //var infoWindow = new google.maps.InfoWindow();

       /* var createMarker = function (info){

            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.long),
                title: info.city
            });
            marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });

            $scope.markers.push(marker);

        }*/


        for (i = 0; i < cities.length; i++){
            //createMarker(cities[i]);
            marker  = MarkerCreatorService.createMarker($scope.map,cities[i]);
            $scope.markers.push(marker);
        }



    });
