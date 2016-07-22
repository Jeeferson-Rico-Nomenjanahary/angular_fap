/**
 * Created by Dev on 22/07/2016.
 */
angular.module('common.services')
    .factory('MarkerCreatorService', function () {

        var markerId = 0;
        var factory = {};

        factory.init = function(){
            var mapOptions = {
                zoom: 4,
                center: new google.maps.LatLng(25,80),
                mapTypeId: google.maps.MapTypeId.TERRAIN
            }

            return new google.maps.Map(document.getElementById('map'), mapOptions);
        }

        factory.createMarker = function (map,info){
            infoWindow = new google.maps.InfoWindow();

            var marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(info.lat, info.long),
                title: info.city,
                allimages: info.images
            });

            htmlImages = '<div>';
            angular.forEach(marker.allimages, function(value, key) {
                htmlImages += '<img src="'+ value.url +'" alt="' + value.alt + '" width="100" height="100" style="display: inline-block;margin-left: 20px" />';
            });
            htmlImages += '</div>';

            marker.content =
                '' +
                '<div class="infoWindowContent">' + info.desc + '</div>' +
                htmlImages
            ;

            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open(map, marker);
            });

            return marker;

        }

        return factory;

    });