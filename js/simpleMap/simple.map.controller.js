/**
 * Created by Dev on 22/07/2016.
 */
//Data
var cities = [
    {
        city : 'India',
        desc : 'This is the best country in the world!',
        lat : 23.200000,
        long : 79.225487,
        images : [
            {
                alt: "alt",
                url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQixh1UR7Il65S-m4-0utTqjfH1z2Ig_b9gdRwQH8GAnekOSU3KQteNqrc"
            },
            {
                alt: "alt",
                url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTJUSXXQe7Fb5ejPPNiigMIOjDyh6LvAExECcfOMxs8M136YzJSXMzjI2R"
            }
        ]
    },
    {
        city : 'New Delhi',
        desc : 'The Heart of India!',
        lat : 28.500000,
        long : 77.250000,
        images : [
            {
                alt: "alt",
                url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPsROsgkU3Z70paSCruLY6u7V485fXIryQ3ADmbMijBxkvsouq4Q"
            },
            {
                alt: "alt",
                url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS4WH1OYNNtlltTkjrcivUuUGYY07vms7_eQtd7_QZSPLak9HcMDw"
            }
        ]
    },
    {
        city : 'Mumbai',
        desc : 'Bollywood city!',
        lat : 19.000000,
        long : 72.90000,
        images : [
            {
                alt: "alt",
                url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQZGNCK_3AtQPl0QTwGW1LzxlQWmsuMMDhCjVKb65vYEm-j_OwHcQ"
            },
            {
                alt: "alt",
                url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSAphOmLCQrRfTvcm2YYt3Edqd_YPCLYLDzDugMZ64EEWX0Lznn3g"
            },
            {
                alt: "alt",
                url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSAphOmLCQrRfTvcm2YYt3Edqd_YPCLYLDzDugMZ64EEWX0Lznn3g"
            }
        ]
    },
    {
        city : 'Kolkata',
        desc : 'Howrah Bridge!',
        lat : 22.500000,
        long : 88.400000,
        images : [
            {
                alt: "alt",
                url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ18C-UVIIaAKmda4xpBXnCxVWrdSOXb61vY9ao-RRqBeZqW94FJQ"
            },
            {
                alt: "alt",
                url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT0rFhZ-KAmJp6hE3lHCTml5Hs3ZU44k8FGBTeNDv_AZ97ovFgW"
            }
        ]
    },
    {
        city : 'Chennai  ',
        desc : 'Kathipara Bridge!',
        lat : 13.000000,
        long : 80.250000,
        images : [
            {
                alt: "alt",
                url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRBTfgMJI5wpXN8X5V9n9MZ7FYl2RlWuma2KFbRB6-0xuq0NEbK"
            },
            {
                alt: "alt",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrpdUd7FZVbgJJLEyKcmsat88z5sIhQ_VqdQ0urBJ7-nwAxtg8"
            }
        ]
    },
    {
        city : 'Toronto',
        desc : 'This is the best city in the world!',
        lat : 43.7000,
        long : -79.4000,
        images : [
            {
                alt: "alt",
                url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRL7ZzbvoNJdcK3AqUzdKQ8J17Vx9ESpvx9yw62M2XImcJkytqN"
            },
            {
                alt: "alt",
                url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ3xX7z2YWr6YXdW_iwgoPyiD8781XkI6cMazAe21t6M__qyOZZ"
            }
        ]
    },
    {
        city : 'New York',
        desc : 'This city is aiiiiite!',
        lat : 40.6700,
        long : -73.9400,
        images : [
            {
                alt: "alt",
                url: "http://url.com"
            },
            {
                alt: "alt",
                url: "http://url.com"
            }
        ]
    },
    {
        city : 'Chicago',
        desc : 'This is the second best city in the world!',
        lat : 41.8819,
        long : -87.6278,
        images : [
            {
                alt: "alt",
                url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTlGlK4B6UNHhrjmx_xl2KZp7j6eHdLwGS5U5xGNfcniJfhtaXo"
            },
            {
                alt: "alt",
                url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTknm17PohKquUx9NexYeEutuIsOSWW7Gt3zv_goxBq1FjkzVGzb8iT4w"
            }
        ]
    },
    {
        city : 'Los Angeles',
        desc : 'This city is live!',
        lat : 34.0500,
        long : -118.2500,
        images : [
            {
                alt: "alt",
                url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTUgExkYdvamIH9FG3-oUDkQ9zuqkNeQwmsSVq6F_UcxUpiq3h2"
            },
            {
                alt: "alt",
                url: "http://www.definitions-marketing.com/wp-content/uploads/IMG/jpg/street-marketing2.jpg"
            }
        ]
    },
    {
        city : 'Las Vegas',
        desc : 'Sin City...\'nuff said!',
        lat : 36.0800,
        long : -115.1522,
        images : [
            {
                alt: "alt",
                url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRt6fGNJAw8lF0m9OKU9zGt5fsHgbT7cvE2xz8M_9h0akV7KWn9dQ"
            },
            {
                alt: "alt",
                url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSkefcFCxBayKblct1WR2Seh8bil2ezfEg4cpPmq5bU5afB9u4t4oSTcA"
            }
        ]
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


        /*
        * affiche les points sur la map
         */
        for (i = 0; i < cities.length; i++){
            marker  = MarkerCreatorService.createMarker($scope.map,cities[i]);
            $scope.markers.push(marker);
        }
        MarkerCreatorService.createCluster($scope.map,$scope.markers)



    });
