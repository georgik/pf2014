/** Touch patch */
function touchHandler(event)
{
    var touches = event.changedTouches,
        first = touches[0],
        type = "";
    switch(event.type)
    {
        case "touchstart": type = "mousedown"; break;
        case "touchmove":  type="mousemove"; break;
        case "touchend":   type="mouseup"; break;
        default: return;
    }
    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1,
        first.screenX, first.screenY,
        first.clientX, first.clientY, false,
        false, false, false, 0/*left*/, null);
    first.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

angular.module('app', ['ngDragDrop'])
    .controller('ConstellationController', function($scope, $timeout, $locale) {

        /** Indicate that game mode is running */
        $scope.isGameMode = false;

        $scope.constellations = startConstellations;
        $scope.constellation = {
            stars:[],
            lines:[]
        };
        $scope.visibleLines = [];
        $scope.visibleStars = [];

        $scope.init = function() {
            // Touch event fix
            document.addEventListener("touchstart", touchHandler, true);
            document.addEventListener("touchmove", touchHandler, true);
            document.addEventListener("touchend", touchHandler, true);
            document.addEventListener("touchcancel", touchHandler, true);

            $scope.constellation = $scope.constellations['gemini'];
            $scope.visibleLines = $scope.constellation.lines.slice();
            $scope.visibleStars = $scope.constellation.stars.slice();

            $timeout($scope.startGame, 1000);
        };

        $scope.getStarStyle = function(item) {
            return {
                position: "absolute",
                left: (item.x - 18) + "px",
                top: (item.y - 18) + "px",
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

        $scope.hideLines = function() {
            $scope.visibleLines = [];
        };

        $scope.startGame = function() {
            $scope.visibleLines = $scope.constellation.lines.slice();
            $scope.hideLines();
            $scope.isGameMode = true;
        };

        /** Display line from start to end point. Ignore if line already exists. */
        $scope.displayLine = function(startPoint, endPoint) {
            for (var index = 0; index < $scope.visibleLines.length; index++) {
                var item = $scope.visibleLines[index];
                // Check whether line already exists
                if ((startPoint == item[0]) && (endPoint == item[1]) ||
                    (startPoint == item[1]) && (endPoint == item[0])) {
                    return;
                }
            }

            // Display line
            $scope.visibleLines.push([startPoint, endPoint]);
            $scope.visibleStars[startPoint].x = $scope.constellation.stars[startPoint].x;
            $scope.visibleStars[startPoint].y = $scope.constellation.stars[startPoint].y;
        };

        $scope.starDrop = function(event, sourceObject) {
            var sourceIndex = parseInt(event.target.getAttribute('data-index'));
            var targetIndex = parseInt(event.toElement.getAttribute('data-index'));
            var forwardVector = [sourceIndex, targetIndex];
            var reverseVector = [targetIndex, sourceIndex];

            // Check whether drop is valid and display line
            for (var index = 0; index < $scope.constellation.lines.length; index++) {
                var item = $scope.constellation.lines[index];
                var startPoint = item[0];
                var endPoint = item[1];
                if ((startPoint == sourceIndex) && (endPoint == targetIndex)) {
                    $scope.displayLine(startPoint, endPoint);
                    break;
                } else if ((startPoint == targetIndex) && (endPoint == sourceIndex)) {
                    $scope.displayLine(endPoint, startPoint);
                    break;
                }
            }
        }
    }
);
