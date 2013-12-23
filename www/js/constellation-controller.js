angular.module('app', [])
    .controller('ConstellationController', function($scope, $locale) {

        $scope.constellations = startConstellations;
        $scope.constellation = {
            stars:[],
            lines:[]
        };

        $scope.init = function() {
            $scope.constellation = $scope.constellations['gemini'];
        };

        $scope.getStarStyle = function(item) {
            return {
                position: "absolute",
                left: (item.x - 4) + "px",
                top: (item.y - 4) + "px",
                color: "yellow"
            };
        };

        $scope.getLineStyle = function(lineItem) {
            var startPoint = $scope.constellation.stars[lineItem[0]];
            var endPoint = $scope.constellation.stars[lineItem[1]];
            var lineLength = Math.sqrt((startPoint.x-endPoint.x)*(startPoint.x-endPoint.x) + (startPoint.y-endPoint.y)*(startPoint.y-endPoint.y));
            var angle  = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x) * 180 / Math.PI;
            var transform = 'rotate('+angle+'deg)';
            return {
                position: "absolute",
                width: lineLength + "px",
                height: "2px",
                "-webkit-transform-origin": "0 100%",
                "transform-origin": "0 100%",
                transform: transform,
                "-webkit-transform": transform,
                left: startPoint.x + "px",
                top: startPoint.y + "px",
                background: "lightyellow"
            };
        };
    }
);
