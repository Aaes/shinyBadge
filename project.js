var mapCursorPosition = function (_a) {
    var x = _a.x, y = _a.y;
    var inputLower = 0;
    var inputUpperX = window.innerWidth;
    var inputUpperY = window.innerHeight;
    var outputUpper = 40;
    var outputLower = -40;
    var INPUT_RANGE_X = inputUpperX - inputLower;
    var INPUT_RANGE_Y = inputUpperY - inputLower;
    var OUTPUT_RANGE = outputUpper - outputLower;
    var outputX = outputLower + (((x - inputLower) / INPUT_RANGE_X) * OUTPUT_RANGE || 0);
    var outputY = outputLower + (((y - inputLower) / INPUT_RANGE_Y) * OUTPUT_RANGE || 0);
    return { x: outputX, y: outputY };
};
var setup = function () {
    var shinyBadgeContainer = document.querySelector(".shinyBadge-container");
    document.addEventListener("pointermove", function (_a) {
        var x = _a.x, y = _a.y;
        var mappedPosition = mapCursorPosition({ x: x, y: y });
        shinyBadgeContainer.style.setProperty("--x", mappedPosition.x.toString() + "deg");
        shinyBadgeContainer.style.setProperty("--y", mappedPosition.y.toString() + "deg");
    });
};
document.addEventListener("DOMContentLoaded", function (event) {
    setup();
});
//# sourceMappingURL=project.js.map