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

angular.module('app', ['ngTouch', 'ngDragDrop'])
    .controller('ConstellationController', function($scope, $timeout, $window, $locale) {

        /** Indicate that game mode is running */
        $scope.isGameMode = false;
        $scope.isLevelCompleteScreenVisible = false;
        $scope.isFinalScreenVisible = false;

        $scope.constellations = startConstellations;
        $scope.constellation = {
            stars:[],
            lines:[]
        };
        $scope.visibleLines = [];
        $scope.visibleStars = [];
        $scope.visibleStarClass = "";
        $scope.levels = ['aries', 'cancer', 'taurus', 'libra', 'capricornus', 'gemini', 'virgo', 'aquarius',
            'scorpius', 'leo', 'pisces', 'sagittarius', 'outro'
        ];
        $scope.levelName = "";
        $scope.outroIndex = $scope.levels.length - 1;
        $scope.currentLevelIndex = 0;
        $scope.isTouchPatched = false;
        $scope.isStartConfirmation = false;

        $scope.init = function() {
            $scope.startLevel(0);
        };

        $scope.addTouchListeners = function() {
            if ($scope.isTouchPatched) {
                return;
            }
            $scope.isTouchPatched = true;
            // Touch event fix
            document.addEventListener("touchstart", touchHandler, true);
            document.addEventListener("touchmove", touchHandler, true);
            document.addEventListener("touchend", touchHandler, true);
            document.addEventListener("touchcancel", touchHandler, true);
        };

        $scope.removeTouchListeners = function() {
            if (!$scope.isTouchPatched) {
                return;
            }
            $scope.isTouchPatched = false;
            document.removeEventListener("touchstart", touchHandler, true);
            document.removeEventListener("touchmove", touchHandler, true);
            document.removeEventListener("touchend", touchHandler, true);
            document.removeEventListener("touchcancel", touchHandler, true);
        };

        /** Recalculate constellation size to current display size. **/
        $scope.adjustConstellation = function() {
            var screenWidth = window.innerWidth;
            var screenHeight = window.innerHeight;

            // Find max and min coordinates
            var minX = 500;
            var minY = 500;
            var maxX = 0;
            var maxY = 0;
            var index;
            var star;

            for (index = 0; index < $scope.constellation.stars.length; index++) {
                star = $scope.constellation.stars[index];
                if (minX > star.x) {
                    minX = star.x
                }
                if (minY > star.y) {
                    minY = star.y;
                }
                if (maxX < star.x) {
                    maxX = star.x;
                }
                if (maxY < star.y) {
                    maxY = star.y;
                }
            }

            var starWidth = maxX - minX + 30;
            var starHeight = maxY - minY + 30;

            // Rotate constellation if it goes out of screen
            if ((starWidth > screenWidth) || (starHeight > screenHeight)) {
                for (index = 0; index < $scope.constellation.stars.length; index++) {
                    star = $scope.constellation.stars[index];
                    var oldX = star.x;
                    star.x = star.y;
                    star.y = -oldX + starWidth;
                }

                var tmp = starHeight;
                starHeight = starWidth;
                starWidth = tmp;

                tmp = minX;
                minX = minY;
                minY = tmp;
            }

            // Stretch constellation
            var ratioX = (screenWidth - 16) / starWidth;
            var ratioY = (screenHeight - 16) / starHeight;

            var ratio = Math.min(ratioX, ratioY);
            if ((ratio < 1.2) || ($scope.currentLevelIndex == $scope.outroIndex)) {
                ratio = 1;
            }

            var driftX = (screenWidth - 16 - starWidth * ratio) / 2;
            if (driftX < 0) {
                driftX = 0;
            }

            var driftY = (screenHeight - 16 - starHeight * ratio) / 2;
            if (driftY < 0) {
                driftY = 0;
            }

            for (index = 0; index < $scope.constellation.stars.length; index++) {
                star = $scope.constellation.stars[index];
                star.x = star.x * ratio + driftX;
                star.y = star.y * ratio + driftY;

                // Check screen boundary
                if (star.x > screenWidth) {
                    star.x = screenWidth - 16;
                }
                if (star.y > screenHeight) {
                    star.y = screenHeight - 16;
                }
            }
        };

        $scope.startLevel = function(levelIndex) {
            $scope.levelName = $scope.levels[levelIndex];
            $scope.currentLevelIndex = levelIndex;
            $scope.constellation = $scope.constellations[$scope.levelName];
            $scope.visibleLines = $scope.constellation.lines.slice();
            $scope.visibleStars = $scope.constellation.stars.slice();

            $scope.adjustConstellation();

            if (levelIndex != $scope.outroIndex) {
                $scope.isStartConfirmation = true;
                $scope.visibleStarClass = "";
            } else {
                $scope.visibleStarClass = "fa-spin";
                $timeout($scope.levelComplete, 5000);
            }
        };

        $scope.getStarStyle = function(item) {
            var style = {
                position: "absolute",
                left: (item.x - 18) + "px",
                top: (item.y - 18) + "px",
                color: "yellow"
            };

            if ($scope.currentLevelIndex == $scope.outroIndex) {
                style['font-size'] = '1em';
                style['padding'] = '1em';
            }

            return style;
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
            $scope.isStartConfirmation = false;
            $scope.visibleLines = $scope.constellation.lines.slice();
            $scope.hideLines();
            $scope.isGameMode = true;
            $scope.addTouchListeners();
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

            if ($scope.visibleLines.length == $scope.constellation.lines.length) {
                $scope.levelComplete();
            }
        };

        /** Process request for star drop. */
        $scope.starDrop = function(event, sourceObject) {
            if (!$scope.isGameMode) {
                return;
            }

            var sourceIndex = parseInt(event.target.getAttribute('data-index'));
            var targetIndex = parseInt(sourceObject.draggable[0].getAttribute('data-index'));

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
        };

        /** Level complete - display screen for next level */
        $scope.levelComplete = function() {
            $scope.isGameMode = false;
            $scope.isLevelCompleteScreenVisible = true;
            if ($scope.outroIndex == $scope.currentLevelIndex) {
                $scope.isFinalScreenVisible = true;
            }
            $scope.removeTouchListeners();
        };

        $scope.restartLevel = function() {
            if ($scope.outroIndex == $scope.currentLevelIndex) {
                $scope.currentLevelIndex = 0;
            }
            $scope.isLevelCompleteScreenVisible = false;
            $scope.isFinalScreenVisible = false;
            $scope.startLevel($scope.currentLevelIndex);
        };

        $scope.nextLevel = function() {
            $scope.isLevelCompleteScreenVisible = false;
            $scope.startLevel($scope.currentLevelIndex + 1);
        };

        $scope.openUrl = function(url) {
            $window.open(url);
        };
    }
);
