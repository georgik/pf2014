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
    .controller('ConstellationController', function($scope, $locale) {

        $scope.constellations = startConstellations;
        $scope.constellation = {
            stars:[],
            lines:[]
        };

        $scope.init = function() {
            $scope.constellation = $scope.constellations['gemini'];
            document.addEventListener("touchstart", touchHandler, true);
            document.addEventListener("touchmove", touchHandler, true);
            document.addEventListener("touchend", touchHandler, true);
            document.addEventListener("touchcancel", touchHandler, true);
//            $('#widget').draggable();
        };


        $scope.dropped = function(dragEl, dropEl) { // function referenced by the drop target
            //this is application logic, for the demo we just want to color the grid squares
            //the directive provides a native dom object, wrap with jqlite
            var drop = angular.element(dropEl);
            var drag = angular.element(dragEl);

            //clear the previously applied color, if it exists
            var bgClass = drop.attr('data-color');
            if (bgClass) {
                drop.removeClass(bgClass);
            }

            //add the dragged color
            bgClass = drag.attr("data-color");
            drop.addClass(bgClass);
            drop.attr('data-color', bgClass);

            //if element has been dragged from the grid, clear dragged color
            if (drag.attr("x-lvl-drop-target")) {
                drag.removeClass(bgClass);
            }
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
    }
);
